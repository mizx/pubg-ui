export interface Theme {
  color: {
    primary: string;
    secondary: string;
  };
  font: {
    display: string;
    body: string;
  };
  unit: (unit: number) => string;
}

export const theme: Theme = {
  color: {
    primary: '#F6BC00',
    secondary: '#FFF'
  },
  font: {
    display: `'Headliner45', sans-serif`,
    body: `'Roboto', sans-serif`
  },
  unit: (unit: number) => `${unit}vmin`
};

export default theme;
