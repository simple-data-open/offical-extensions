import { WidgetExtension } from './renderer/widget';

import './editor.css';

export const mapSlots = (slot: SimpleExtSpace.Slot) => {
  const slots = {
    widget: WidgetExtension,
  };

  const _slot = slots[slot];

  if (!_slot) {
    console.error(`Miss slot ${slot}`);
  }

  return _slot;
};
