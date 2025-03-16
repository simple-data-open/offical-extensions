import { Chart } from '@antv/g2';
import {
  WidgetAdapter,
  WidgetAdapterInterface,
  WidgetAdapterOptions,
} from '@simple-data-open/adapter';

import { formatTheme } from '../theme/format';

export class WidgetExtension
  extends WidgetAdapter<SimpleExtensionCustomizeWidget>
  implements WidgetAdapterInterface
{
  private chart: Chart | null = null;

  private box: HTMLDivElement | null = null;

  constructor(options: WidgetAdapterOptions) {
    super(options);
  }
  public mount = () => {
    const box = document.createElement('div');
    Object.assign(box.style, {
      width: '100%',
      height: '100%',
    });
    this.container.appendChild(box);

    this.box = box;

    this.createInstance();
  };
  public unmount = () => {
    this.chart?.clear();
    this.chart?.off();
    this.chart?.destroy();
    this.chart = null;
    this.box?.remove();
    this.box = null;
  };

  public createInstance = () => {
    if (!this.box) return;

    this.chart?.destroy();

    const { datasource, custom_data: customData } = this.instance;

    const chart = new Chart({
      container: this.box,
      autoFit: true,
    });

    chart.options({
      title: {
        title: customData.title.maintitle.text,
        subtitle: customData.title.subtitle.text,
      },
    });
    // @ts-expect-error - antv g2 类型问题
    chart.interval().animate('enter', { type: false });

    chart.data(datasource.data);

    customData.encodes.forEach(({ channel, field }) => {
      chart.encode(channel, field);
    });

    customData.transforms.forEach(({ type, order_by, reverse }) => {
      chart.transform({
        type,
        orderBy: order_by,
        reverse,
      });
    });

    chart.axis('y', {
      title: customData.axis.y.title,
    });
    chart.axis('x', {
      title: customData.axis.x.title,
    });

    chart.legend({
      color: {
        itemMarker: customData.legend.item.marker,
      },
    });

    chart.theme(formatTheme(customData));

    chart.render();

    this.chart = chart;
  };

  timer: number | null = null;

  public resize = () => {
    this.chart?.forceFit();
  };

  public update = chain => {
    const excludes = [
      'name',
      'appearance',
      'background',
      'border',
      'extension',
      'hide',
      'id',
      'position',
      'rotation',
      'schema',
    ];
    if (excludes.includes(chain[0])) return;

    this.createInstance();
  };
}
