export interface Theme {
  color: {
    primary: string;
    secondary: string;
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
  unit: (unit: number) => string;
}

type ViewportUnit = 'vmin' | 'vmax' | 'vw' | 'vh';

export const unit = (value: number, vUnit: ViewportUnit = 'vmin') => `${value}${vUnit}`;

export const theme: Theme = {
  color: {
    primary: '#F6BC00',
    secondary: '#FFF'
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
