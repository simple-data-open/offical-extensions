import { PropertyAdapter, PropertyGroupModel } from '@simple-data-open/adapter';

export class WidgetPropertyRenderer extends PropertyAdapter {
  public render = (_data: any): PropertyGroupModel[] => {
    return [
      {
        renderers: [
          {
            name: '---',
            chain: [
              ['position', 'axis'],
              ['position', 'lock'],
            ],
            render: 'position',
            span: 4,
          },
        ],
      },
    ];
  };
}
