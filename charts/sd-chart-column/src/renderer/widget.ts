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

  private renderTask: number | null = null;

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
    if (this.renderTask !== null) {
      window.cancelIdleCallback(this.renderTask);
    }
    this.chart?.destroy();
  };

  public createInstance = () => {
    if (!this.box) return;

    this.chart?.destroy();

    const { datasource, custom_data: customData } = this.instance;

    const chart = new Chart({
      container: this.box,
      autoFit: true,
    });

    chart.interval();
    chart.options({
      title: {
        title: customData.title.maintitle.text,
        subtitle: customData.title.subtitle.text,
      },
    });

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

    chart.theme(formatTheme(customData));

    chart.render();

    this.chart = chart;
  };

  timer: number | null = null;

  private handleChangeSizes = (deadline: IdleDeadline) => {
    if (deadline.timeRemaining() > 0) {
      this.chart?.forceFit();
    }
  };

  public resize = () => {
    if (this.renderTask !== null) {
      window.cancelIdleCallback(this.renderTask);
    }

    this.renderTask = window.requestIdleCallback(this.handleChangeSizes);
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
