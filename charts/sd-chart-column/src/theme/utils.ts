export function transformFont(prefix: string, font: ChartFont) {
  return {
    [`${prefix}FontSize`]: font.size,
    [`${prefix}FontFamily`]: font.family,
    [`${prefix}FontWeight`]: font.weight,
    [`${prefix}Fill`]: window.SimpleSDK.color.toHexa(font.color).hexa,
    [`${prefix}Stroke`]: window.SimpleSDK.color.toHexa(font.stroke).hexa,
    [`${prefix}LineWidth`]: font.line_width,
  };
}
