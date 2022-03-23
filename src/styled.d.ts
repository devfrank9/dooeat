import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    pointColor1: string;
    pointColor2: string;
    pointColor3: string;
    btnColor1: string;
    btnColor2: string;
    btnColor3: string;
    btnColor4: string;
    fontColor1: string;
    fontColor2: string;
    fontColor3: string;
    roboto: string;
    color: {
      'text-color': string;
    };

    media: {
      pc: number;
      btw_pc_tab: number;
      tablet: number;
      btw_tab_mob: number;
      phone: number;
      headerSearch: number;
    };
    mediaScreen: {
      pc: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      btw_pc_tab: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      tablet: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      btw_tab_mob: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      mphone: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      phone: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
    };
  }
}
