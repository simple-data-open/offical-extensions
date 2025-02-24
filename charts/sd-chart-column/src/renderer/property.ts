import { PropertyAdapter, PropertyGroupModel } from '@simple-data-open/adapter';

export class WidgetPropertyRenderer extends PropertyAdapter {
  public render = (_data: any): PropertyGroupModel[] => {
    return [
      {
        name: '数据',
        renderers: [
          {
            name: '修改数据源',
            chains: [['datasource']],
            render: 'data',
            span: 4,
          },
        ],
      },
      {
        name: '标题',
        renderers: [
          {
            name: '主标题',
            chains: [['custom_data', 'title', 'maintitle', 'text']],
            render: 'text',
            span: 2,
          },
          {
            name: '标题高度',
            chains: [['custom_data', 'title', 'size']],
            render: 'number',
            span: 2,
          },
          {
            name: '主/副 标题间距',
            chains: [['custom_data', 'title', 'spacing']],
            render: 'number',
            span: 2,
          },
          {
            name: '副标题',
            chains: [['custom_data', 'title', 'subtitle', 'text']],
            render: 'text',
            span: 2,
          },
          {
            name: '主标题颜色',
            chains: [['custom_data', 'title', 'maintitle', 'font', 'color']],
            render: 'color',
            span: 3,
          },
          {
            name: '副标题颜色',
            chains: [['custom_data', 'title', 'subtitle', 'font', 'color']],
            render: 'color',
            span: 3,
          },
        ],
      },
      {
        name: 'X 坐标轴',
        renderers: [
          {
            name: '标题',
            chains: [['custom_data', 'axis', 'x', 'title']],
            render: 'text',
            span: 3,
          },
        ],
      },
      {
        name: 'Y 坐标轴',
        renderers: [
          {
            name: '标题',
            chains: [['custom_data', 'axis', 'y', 'title']],
            render: 'text',
            span: 3,
          },
        ],
      },
    ];
  };
}
