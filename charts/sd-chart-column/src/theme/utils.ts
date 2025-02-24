// TODO: 暂时使用
declare global {
  interface Window {
    editorInhSDK: any;
  }
}

export function transformFont(prefix: string, font: ChartFont) {
  return {
    [`${prefix}FontSize`]: font.size,
    [`${prefix}FontFamily`]: font.family,
    [`${prefix}FontWeight`]: font.weight,
    [`${prefix}Fill`]: window.editorInhSDK.colorPicker.toHexa(font.color).hexa,
    [`${prefix}Stroke`]: window.editorInhSDK.colorPicker.toHexa(font.stroke)
      .hexa,
    [`${prefix}LineWidth`]: font.line_width,
  };
}
