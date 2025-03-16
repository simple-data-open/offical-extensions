declare interface ChartFont {
  size: number;
  family: string;
  weight: number;
  color: string;
  stroke: string;
  line_width: number;
}

declare interface ChartTitle {
  size: number;
  margin_top: number;
  align: 'left' | 'center' | 'right';
  spacing: number;

  maintitle: {
    text: string;
    font: ChartFont;
  };
  subtitle: {
    text: string;
    font: ChartFont;
  };
}

declare interface SimpleExtensionCustomizeWidget {
  title: ChartTitle;
  axis: {
    x: {
      title: string;
    };
    y: {
      title: string;
    };
  };
  legend: {
    item: {
      marker: 'circle' | 'square';
    };
  };
  encodes: {
    channel: 'x' | 'y' | 'color';
    field: string;
  }[];
  transforms: [
    {
      type: 'dodgeX' | 'stackY';
      order_by: 'value';
      reverse: boolean;
    },
  ];
}
