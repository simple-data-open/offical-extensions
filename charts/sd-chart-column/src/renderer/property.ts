import { PropertyAdapter, PropertyGroupModel } from '@simple-data-open/adapter';

export class WidgetPropertyRenderer extends PropertyAdapter {
  public onValueChange = (chain: SimpleModifier.ChainType) => {
    if (chain[0] === 'datasource') {
      this.rerender?.();
      return true;
    }
    return false;
  };

  public render = (
    instance: SimpleExtSpace.Widget<SimpleExtensionCustomizeWidget>,
  ): PropertyGroupModel[] => {
    return [
      {
        name: '数据',
        renderers: [
          {
            name: 'X 轴',
            chains: [['custom_data', 'encodes', 0, 'field']],
            render: 'select',
            span: 2,
            options: {
              options: instance.datasource.columns.map(col => ({
                label: col.field,
                value: col.field,
              })),
            },
          },
          {
            name: 'Y 轴',
            chains: [['custom_data', 'encodes', 1, 'field']],
            render: 'select',
            span: 2,
            options: {
              options: instance.datasource.columns.map(col => ({
                label: col.field,
                value: col.field,
              })),
            },
          },
          {
            name: '分组',
            chains: [['custom_data', 'encodes', 2, 'field']],
            render: 'select',
            span: 2,
            options: {
              options: instance.datasource.columns.map(col => ({
                label: col.field,
                value: col.field,
              })),
            },
          },
          {
            name: '',
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
