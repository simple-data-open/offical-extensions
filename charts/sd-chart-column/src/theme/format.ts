import { transformFont } from './utils';

function extractColor(color: string) {
  return window.editorInhSDK.colorPicker.toHexa(color).hex;
}

function extractColorAlpha(color: string) {
  return window.editorInhSDK.colorPicker.toHexa(color).alpha;
}

export const formatTheme = (customize: SimpleExtensionCustomizeWidget) => ({
  padding: 'auto',
  margin: 16,
  size: 1,
  color: extractColor('#1783FF | 4'),
  category10: [
    extractColor('#1783FF | 4'),
    extractColor('#00C9C9 | 5'),
    extractColor('#F0884D | 6'),
    extractColor('#D580FF | 7'),
    extractColor('#7863FF | 8'),
    extractColor('#60C42D | 9'),
    extractColor('#BD8F24 | 10'),
    extractColor('#FF80CA | 11'),
    extractColor('#2491B3 | 12'),
    extractColor('#17C76F | 13'),
  ],
  category20: [
    extractColor('#1783FF | 4'),
    extractColor('#00C9C9 | 5'),
    extractColor('#F0884D | 6'),
    extractColor('#D580FF | 7'),
    extractColor('#7863FF | 8'),
    extractColor('#60C42D | 9'),
    extractColor('#BD8F24 | 10'),
    extractColor('#FF80CA | 11'),
    extractColor('#2491B3 | 12'),
    extractColor('#17C76F | 13'),
    extractColor('#AABA01 | 14'),
    extractColor('#BC7CFC | 15'),
    extractColor('#237CBC | 16'),
    extractColor('#2DE379 | 17'),
    extractColor('#CE8032 | 18'),
    extractColor('#FF7AF4 | 19'),
    extractColor('#545FD3 | 20'),
    extractColor('#AFE410 | 21'),
    extractColor('#D8C608 | 22'),
    extractColor('#FFA1E0 | 23'),
  ],
  enter: { duration: 300, fill: 'both', delay: 0 },
  update: { duration: 300, fill: 'both', delay: 0 },
  exit: { duration: 300, fill: 'both', delay: 0 },
  view: {
    viewFill: 'transparent',
    plotFill: 'transparent',
    mainFill: 'transparent',
    contentFill: 'transparent',
  },
  line: {
    line: {
      fill: '',
      strokeOpacity: 1,
      lineWidth: 1,
      lineCap: 'round',
    },
  },
  point: {
    point: { r: 3, fillOpacity: 0.95, lineWidth: 0 },
    hollow: { r: 3, strokeOpacity: 0.95, lineWidth: 1 },
    plus: { r: 3, strokeOpacity: 0.95, lineWidth: 3 },
    diamond: { r: 3, strokeOpacity: 0.95, lineWidth: 1 },
  },
  interval: {
    rect: { fillOpacity: 0.95 },
    hollow: { fill: '', strokeOpacity: 1, lineWidth: 2 },
  },
  area: { area: { fillOpacity: 0.85, lineWidth: 0 } },
  polygon: { polygon: { fillOpacity: 0.95 } },
  cell: {
    cell: { fillOpacity: 0.95 },
    hollow: { fill: '', strokeOpacity: 1, lineWidth: 2 },
  },
  rect: {
    rect: { fillOpacity: 0.95 },
    hollow: { fill: '', strokeOpacity: 1, lineWidth: 2 },
  },
  link: { link: { fill: '', strokeOpacity: 1 } },
  vector: { vector: { fillOpacity: 1 } },
  box: {
    box: {
      fillOpacity: 0.95,
      stroke: extractColor('#ffffff55 | 3'),
      lineWidth: 1,
    },
  },
  text: {
    text: {
      fill: extractColor('#ffffff55 | 3'),
      fontSize: 12,
      lineWidth: 0,
      connectorStroke: extractColor('#416180 | 27'),
      connectorStrokeOpacity: 0.45,
      connectorLineWidth: 1,
      backgroundFill: extractColor('#416180 | 27'),
      backgroundFillOpacity: 0.15,
      backgroundPadding: [2, 4],
      startMarkerSymbol: 'circle',
      startMarkerSize: 4,
      endMarkerSymbol: 'circle',
      endMarkerSize: 4,
    },
    badge: {
      fill: extractColor('#ffffff55 | 3'),
      fillOpacity: 0.65,
      lineWidth: 0,
      fontSize: 10,
      textAlign: 'center',
      textBaseline: 'middle',
      markerFill: extractColor('#416180 | 27'),
      markerFillOpacity: 0.25,
      markerStrokeOpacity: 0,
    },
  },
  lineX: {
    line: {
      stroke: extractColor('#416180 | 27'),
      strokeOpacity: 0.45,
      lineWidth: 1,
    },
  },
  lineY: {
    line: {
      stroke: extractColor('#416180 | 27'),
      strokeOpacity: 0.45,
      lineWidth: 1,
    },
  },
  rangeX: {
    range: {
      fill: extractColor('#416180 | 27'),
      fillOpacity: 0.15,
      lineWidth: 0,
    },
  },
  rangeY: {
    range: {
      fill: extractColor('#416180 | 27'),
      fillOpacity: 0.15,
      lineWidth: 0,
    },
  },
  connector: {
    connector: {
      stroke: extractColor('#416180 | 27'),
      strokeOpacity: 0.45,
      lineWidth: 1,
      connectLength1: 12,
      endMarker: true,
      endMarkerSize: 6,
      endMarkerFill: extractColor('#416180 | 27'),
      endMarkerFillOpacity: 0.95,
    },
  },
  axis: {
    arrow: false,
    gridLineDash: [3, 4],
    gridLineWidth: 0.5,
    gridStroke: extractColor('#ffffff55 | 3'),
    gridStrokeOpacity: 0.1,
    labelAlign: 'horizontal',
    labelFill: extractColor('#ffffff55 | 3'),
    labelOpacity: extractColorAlpha('#ffffff55 | 3'),
    labelFontSize: 12,
    labelFontWeight: 'normal',
    labelSpacing: 8,
    line: false,
    lineLineWidth: 0.5,
    lineStroke: extractColor('#ffffff55 | 3'),
    lineStrokeOpacity: 0.45,
    tickLength: 4,
    tickLineWidth: 1,
    tickStroke: extractColor('#ffffff55 | 3'),
    tickOpacity: 0.45,
    titleFill: extractColor('#ffffff55 | 3'),
    titleOpacity: 0.9,
    titleFontSize: 12,
    titleFontWeight: 'normal',
    titleSpacing: 12,
    titleTransformOrigin: 'center',
    lineArrowOffset: 6,
    lineArrowSize: 6,
  },
  axisTop: {
    gridDirection: 'positive',
    labelDirection: 'negative',
    tickDirection: 'negative',
    titlePosition: 'top',
    titleSpacing: 12,
    labelSpacing: 4,
    titleTextBaseline: 'middle',
  },
  axisBottom: {
    gridDirection: 'negative',
    labelDirection: 'positive',
    tickDirection: 'positive',
    titlePosition: 'bottom',
    titleSpacing: 12,
    labelSpacing: 4,
    titleTextBaseline: 'bottom',
    titleTransform: 'translate(0, 8)',
  },
  axisLeft: {
    gridDirection: 'positive',
    labelDirection: 'negative',
    labelSpacing: 4,
    tickDirection: 'negative',
    titlePosition: 'left',
    titleSpacing: 12,
    titleTextBaseline: 'middle',
    titleDirection: 'vertical',
    titleTransform: 'rotate(-90) translate(0, -8)',
    titleTransformOrigin: 'center',
  },
  axisRight: {
    gridDirection: 'negative',
    labelDirection: 'positive',
    labelSpacing: 4,
    tickDirection: 'positive',
    titlePosition: 'right',
    titleSpacing: 12,
    titleTextBaseline: 'top',
    titleDirection: 'vertical',
    titleTransformOrigin: 'center',
  },
  axisLinear: {
    girdClosed: true,
    gridConnect: 'arc',
    gridDirection: 'negative',
    gridType: 'surround',
    titlePosition: 'top',
    titleSpacing: 0,
  },
  axisArc: {
    title: false,
    titlePosition: 'inner',
    line: false,
    tick: true,
    labelSpacing: 4,
  },
  axisRadar: {
    girdClosed: true,
    gridStrokeOpacity: 0.3,
    gridType: 'surround',
    label: false,
    tick: false,
    titlePosition: 'start',
  },
  legendCategory: {
    backgroundFill: 'transparent',
    itemBackgroundFill: 'transparent',
    itemLabelFill: extractColor('#ffffff55 | 3'),
    itemLabelFillOpacity: 0.9,
    itemLabelFontSize: 12,
    itemLabelFontWeight: 'normal',
    itemMarkerFillOpacity: 1,
    itemMarkerSize: 8,
    itemSpacing: [8, 8],
    itemValueFill: extractColor('#ffffff55 | 3'),
    itemValueFillOpacity: 0.65,
    itemValueFontSize: 12,
    itemValueFontWeight: 'normal',
    navButtonFill: extractColor('#ffffff55 | 3'),
    navButtonFillOpacity: 0.65,
    navPageNumFill: extractColor('#ffffff55 | 3'),
    navPageNumFillOpacity: 0.45,
    navPageNumFontSize: 12,
    padding: 8,
    title: false,
    titleFill: extractColor('#ffffff55 | 3'),
    titleFillOpacity: 0.65,
    titleFontSize: 12,
    titleFontWeight: 'normal',
    titleSpacing: 4,
    tickStroke: extractColor('#ffffff55 | 3'),
    tickStrokeOpacity: 0.25,
    rowPadding: 8,
    colPadding: 12,
    maxRows: 3,
    maxCols: 3,
  },
  legendContinuous: {
    handleHeight: 12,
    handleLabelFill: extractColor('#ffffff55 | 3'),
    handleLabelFillOpacity: 0.45,
    handleLabelFontSize: 12,
    handleLabelFontWeight: 'normal',
    handleMarkerFill: extractColor('#ffffff55 | 3'),
    handleMarkerFillOpacity: 0.6,
    handleMarkerLineWidth: 1,
    handleMarkerStroke: extractColor('#ffffff55 | 3'),
    handleMarkerStrokeOpacity: 0.25,
    handleWidth: 10,
    labelFill: extractColor('#ffffff55 | 3'),
    labelFillOpacity: 0.45,
    labelFontSize: 12,
    labelFontWeight: 'normal',
    labelSpacing: 3,
    tick: true,
    tickLength: 12,
    ribbonSize: 12,
    ribbonFill: '#aaa',
    handle: true,
    handleLabel: false,
    handleShape: 'slider',
    handleIconSize: 6.666666666666666,
    indicator: false,
    titleFontSize: 12,
    titleSpacing: 4,
    titleFontWeight: 'normal',
    titleFillOpacity: 0.9,
    tickStroke: extractColor('#ffffff55 | 3'),
    tickStrokeOpacity: 0.45,
  },
  label: {
    fill: extractColor('#ffffff55 | 3'),
    fillOpacity: 0.65,
    fontSize: 12,
    fontWeight: 'normal',
    offset: 12,
    connectorStroke: extractColor('#ffffff55 | 3'),
    connectorStrokeOpacity: 0.45,
    connectorLineWidth: 1,
    connectorLength: 12,
    connectorLength2: 8,
    connectorDistance: 4,
  },
  innerLabel: {
    fill: extractColor('#000000 | 28'),
    fontSize: 12,
    fillOpacity: 0.85,
    fontWeight: 'normal',
    offset: 0,
  },
  htmlLabel: {
    fontSize: 12,
    opacity: 0.65,
    color: extractColor('#ffffff55 | 3'),
    fontWeight: 'normal',
  },
  slider: {
    trackSize: 16,
    trackFill: extractColor('#416180 | 27'),
    trackFillOpacity: 1,
    selectionFill: extractColor('#1783FF | 4'),
    selectionFillOpacity: 0.15,
    handleIconSize: 10,
    handleIconFill: extractColor('#f7f7f7 | 24'),
    handleIconFillOpacity: 1,
    handleIconStroke: extractColor('#ffffff55 | 3'),
    handleIconStrokeOpacity: 0.25,
    handleIconLineWidth: 1,
    handleIconRadius: 2,
    handleLabelFill: extractColor('#ffffff55 | 3'),
    handleLabelFillOpacity: 0.45,
    handleLabelFontSize: 12,
    handleLabelFontWeight: 'normal',
  },
  scrollbar: {
    padding: [0, 0, 0, 0],
    trackSize: 6,
    isRound: true,
    slidable: true,
    scrollable: true,
    trackFill: extractColor('#e5e5e5 | 26'),
    trackFillOpacity: 0,
    thumbFill: extractColor('#000000 | 25'),
    thumbFillOpacity: 0.15,
    thumbHighlightedFillOpacity: 0.2,
  },
  title: {
    marginTop: customize.title.margin_top,
    size: customize.title.size,
    align: customize.title.align,
    spacing: customize.title.spacing,

    ...transformFont('title', customize.title.maintitle.font),
    ...transformFont('subtitle', customize.title.subtitle.font),
    // titleTextBaseline: 'top',
    // subtitleTextBaseline: 'top',
  },
  tooltip: { css: { '.g2-tooltip': { 'font-family': 'sans-serif' } } },
});
