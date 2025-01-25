import {
  ExtensionAdapter,
  ExtensionAdapterInterface,
  ExtensionAdapterOptions,
} from '@simple-data-open/adapter';

import { mount } from './widget';

export class WidgetExtension
  extends ExtensionAdapter
  implements ExtensionAdapterInterface
{
  constructor(options: ExtensionAdapterOptions) {
    super(options);
  }
  public mount = () => {
    mount(this.container);
  };
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
