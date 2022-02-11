import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    textColor: string;
    accentColor: string;
    selectColor: string;
  }
}
