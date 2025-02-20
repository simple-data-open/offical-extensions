import { Chart } from '@antv/g2';
import {
  WidgetAdapter,
  WidgetAdapterInterface,
  WidgetAdapterOptions,
} from '@simple-data-open/adapter';

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

    const { x, y } = this.instance.custom_data;
    const data = [
      { [x]: 'H', [y]: 0.06094 },
      { [x]: 'I', [y]: 0.06966 },
      { [x]: 'J', [y]: 0.00153 },
      { [x]: 'K', [y]: 0.00772 },
      { [x]: 'L', [y]: 0.04025 },
      { [x]: 'M', [y]: 0.02406 },
      { [x]: 'N', [y]: 0.06749 },
      { [x]: 'O', [y]: 0.07507 },
      { [x]: 'P', [y]: 0.01929 },
      { [x]: 'Q', [y]: 0.00095 },
      { [x]: 'R', [y]: 0.05987 },
      { [x]: 'S', [y]: 0.06327 },
      { [x]: 'T', [y]: 0.09056 },
      { [x]: 'U', [y]: 0.02758 },
      { [x]: 'V', [y]: 0.00978 },
      { [x]: 'W', [y]: 0.0236 },
      { [x]: 'X', [y]: 0.0015 },
      { [x]: 'Y', [y]: 0.01974 },
      { [x]: 'Z', [y]: 0.00074 },
    ];
    const chart = new Chart({
      container: this.box,
      autoFit: true,
    });

    chart.interval().data(data).encode('x', x).encode('y', y);

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
    if (chain[1] === 'x' || chain[1] === 'y') {
      this.createInstance();
    }
  };
}
