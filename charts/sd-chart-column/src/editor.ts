import { generateWidgetCover, generateWidgetCustomizeData } from './customize';
import { WidgetPropertyRenderer } from './renderer/property';
import { WidgetExtension } from './renderer/widget';

import './editor.css';

export const mapSlots = (slot: SimpleExtSpace.Slot) => {
  const slots = {
    widget: WidgetExtension,
    property: WidgetPropertyRenderer,
  };

  const _slot = slots[slot];

  if (!_slot) {
    console.error(`Miss slot ${slot}`);
  }

  return _slot;
};

export const mapCustomizeData = (name: string) => {
  return {
    widget: generateWidgetCustomizeData,
    widgetCover: generateWidgetCover,
  }[name];
};
