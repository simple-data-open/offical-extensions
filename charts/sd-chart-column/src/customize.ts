export const generateWidgetCustomizeData =
  (): SimpleExtensionCustomizeWidget => ({
    title: {
      size: 34,
      margin_top: 0,
      align: 'left',
      spacing: 4,

      maintitle: {
        text: '2024 年降水量',
        font: {
          size: 20,
          family: 'sans-serif',
          weight: 600,
          color: '#ffffff | 1',
          stroke: '#ffffff | 1',
          line_width: 0,
        },
      },
      subtitle: {
        text: '(单位:毫米)',
        font: {
          size: 12,
          family: 'Arial',
          weight: 300,
          color: '#ffffff55 | 2',
          stroke: '#ffffff55 | 2',
          line_width: 0,
        },
      },
    },
    axis: {
      x: {
        title: '月份',
      },
      y: {
        title: '降雨量',
      },
    },
    legend: {
      item: {
        marker: 'circle',
      },
    },
    encodes: [
      {
        channel: 'x',
        field: 'month',
      },
      {
        channel: 'y',
        field: 'rainfall',
      },
      {
        channel: 'color',
        field: 'city',
      },
    ],
    transforms: [
      {
        type: 'dodgeX',
        order_by: 'value',
        reverse: false,
      },
    ],
  });
export const generateWidgetCover = (): SimpleExtSpace.WidgetCover => ({
  background: '#00000055 | 0',
  layout: {
    size: [600, 400],
    fixed: false,
  },
  datasource: {
    id: '',
    source: 'custom',
    columns: [
      {
        field: 'city',
        type: 'text',
        width: 200,
      },
      {
        field: 'month',
        type: 'text',
        width: 200,
      },
      {
        field: 'rainfall',
        type: 'numeric',
        width: 200,
      },
    ],
    data: [
      { city: '广州', month: '一月', rainfall: 40.5 },
      { city: '广州', month: '二月', rainfall: 60.3 },
      { city: '广州', month: '三月', rainfall: 90.7 },
      { city: '广州', month: '四月', rainfall: 180.2 },
      { city: '广州', month: '五月', rainfall: 280.6 },
      { city: '广州', month: '六月', rainfall: 350.4 },
      { city: '广州', month: '七月', rainfall: 320.8 },
      { city: '广州', month: '八月', rainfall: 310.5 },
      { city: '广州', month: '九月', rainfall: 220.3 },
      { city: '广州', month: '十月', rainfall: 100.6 },
      { city: '广州', month: '十一月', rainfall: 50.2 },
      { city: '广州', month: '十二月', rainfall: 30.8 },

      { city: '深圳', month: '一月', rainfall: 25.3 },
      { city: '深圳', month: '二月', rainfall: 40.2 },
      { city: '深圳', month: '三月', rainfall: 65.7 },
      { city: '深圳', month: '四月', rainfall: 180.4 },
      { city: '深圳', month: '五月', rainfall: 250.6 },
      { city: '深圳', month: '六月', rainfall: 320.8 },
      { city: '深圳', month: '七月', rainfall: 280.5 },
      { city: '深圳', month: '八月', rainfall: 270.3 },
      { city: '深圳', month: '九月', rainfall: 200.7 },
      { city: '深圳', month: '十月', rainfall: 90.4 },
      { city: '深圳', month: '十一月', rainfall: 35.2 },
      { city: '深圳', month: '十二月', rainfall: 20.1 },

      { city: '杭州', month: '一月', rainfall: 50.6 },
      { city: '杭州', month: '二月', rainfall: 75.3 },
      { city: '杭州', month: '三月', rainfall: 110.4 },
      { city: '杭州', month: '四月', rainfall: 140.2 },
      { city: '杭州', month: '五月', rainfall: 160.8 },
      { city: '杭州', month: '六月', rainfall: 220.5 },
      { city: '杭州', month: '七月', rainfall: 180.3 },
      { city: '杭州', month: '八月', rainfall: 170.6 },
      { city: '杭州', month: '九月', rainfall: 130.4 },
      { city: '杭州', month: '十月', rainfall: 80.2 },
      { city: '杭州', month: '十一月', rainfall: 60.1 },
      { city: '杭州', month: '十二月', rainfall: 40.5 },
    ],
  },
});
