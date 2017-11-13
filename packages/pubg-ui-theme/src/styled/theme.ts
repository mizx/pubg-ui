type ViewportUnit = 'vmin' | 'vmax' | 'vw' | 'vh';

export interface Theme {
  color: {
    primary: string;
    secondary: string;
  };
  button: {
    color: string;
    hoverColor: string;
  };
  font: {
    display: string;
    body: string;
  };
  app: {
    margin: string;
  };
  appBar: {
    height: string;
  };
  unit: (unit: number, vUnit?: ViewportUnit) => string;
}

export const unit = (value: number, vUnit: ViewportUnit = 'vmin') => `${value}${vUnit}`;

export const theme: Theme = {
  color: {
    primary: '#f19f00',
    secondary: '#FFF'
  },
  button: {
    color: 'rgba(255, 255, 255, .5)',
    hoverColor: '#f19f00'
  },
  font: {
    display: `'Headliner45', sans-serif`,
    body: `'Roboto', sans-serif`
  },
  app: {
    margin: `${unit(4, 'vh')} ${unit(4, 'vw')}}`
  },
  appBar: {
    height: unit(6)
  },
  unit: unit
};

export default theme;
