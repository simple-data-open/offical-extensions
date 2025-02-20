import {
  WidgetAdapter,
  WidgetAdapterInterface,
  WidgetAdapterOptions,
} from '@simple-data-open/adapter';

export class WidgetExtension
  extends WidgetAdapter
  implements WidgetAdapterInterface
{
  constructor(options: WidgetAdapterOptions) {
    super(options);
  }
  public mount = () => {};
  public unmount = () => {};
}

export const mapSlots = (slot: SimpleExtSpace.Slot) => {
  const slots = {
    canvas: {
      widget: WidgetExtension,
    },
  };

  const _slot = slots[slot];

  if (!_slot) {
    console.error(`Miss slot ${slot}`);
  }

  return _slot;
};
