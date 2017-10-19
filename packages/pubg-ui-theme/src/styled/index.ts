import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import theme, { Theme } from './theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { theme, css, injectGlobal, keyframes, ThemeProvider };
export default styled;
