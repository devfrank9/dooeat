import {createGlobalStyle, css} from 'styled-components';

export const HEADER_HEIGHT = 8;
const PC_RESOLUTION = 1050;
const BTW_PC_AND_TAB_RESOLUTION = 900;
const TABLET_RESOLUTION = 768;
const BTW_TAB_AND_MOBILE_RESOLUTION = 595;
const MIDIUM_PHONE_RESOLUTION = 480;
const PHONE_RESOLUTION = 425;
const HEADER_SEARCH_RESOLUTION = 550;

const customMediaQuery = (screen: number) =>
  `@media screen and (max-width: ${screen}px)`;

export const mediaScreen = {
  // 1050px 해상도 위에서만 디스플레이
  pc: (args: TemplateStringsArray) => css`
    ${customMediaQuery(PC_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 900px 해상도 위에서만 디스플레이
  btw_pc_tab: (args: TemplateStringsArray) => css`
    ${customMediaQuery(BTW_PC_AND_TAB_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 768px 해상도 위에서만 디스플레이
  tablet: (args: TemplateStringsArray) => css`
    ${customMediaQuery(TABLET_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 595px 해상도 위에서만 디스플레이
  btw_tab_mob: (args: TemplateStringsArray) => css`
    ${customMediaQuery(BTW_TAB_AND_MOBILE_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 480px 해상도 위에서만 디스플레이
  mphone: (args: TemplateStringsArray) => css`
    ${customMediaQuery(MIDIUM_PHONE_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 425px 해상도 위에서만 디스플레이
  phone: (args: TemplateStringsArray) => css`
    ${customMediaQuery(PHONE_RESOLUTION)} {
      ${css(args)};
    }
  `,
};

export const media = {
  pc: PC_RESOLUTION,
  btw_pc_tab: BTW_PC_AND_TAB_RESOLUTION,
  tablet: TABLET_RESOLUTION,
  btw_tab_mob: BTW_TAB_AND_MOBILE_RESOLUTION,
  phone: PHONE_RESOLUTION,
  headerSearch: HEADER_SEARCH_RESOLUTION,
};

export const GlobalStyle = createGlobalStyle`
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body,
html {
  font: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}
.app {
  width: 100vw;
  height: 100vh;
}

${customMediaQuery(TABLET_RESOLUTION)} {
      max-width: ${TABLET_RESOLUTION}px;
      margin: 4rem auto;
      padding: 0 2rem;
    }
    ${customMediaQuery(PHONE_RESOLUTION)} {
      max-width: ${PHONE_RESOLUTION}px;
      margin: 3rem auto;
      padding: 0 1rem;
    }
  }
  .pagination-scroll-top {
    padding-top: ${HEADER_HEIGHT}rem;
    margin-top: ${-HEADER_HEIGHT}rem;
  }
  // pc 해상도에서만 display: none
  .on_pc_resolution {
    ${customMediaQuery(PC_RESOLUTION)} {
      display: none;
    }
  }
  // BTW_PC&TAB 해상도에서만 display: none
  .on_btw_pc_tab_resolution {
    ${customMediaQuery(BTW_PC_AND_TAB_RESOLUTION)} {
      display: none;
    }
  }
  // tablet 해상도에서부터 display: none
  .on_tablet_resolution {
    ${customMediaQuery(TABLET_RESOLUTION)} {
      display: none;
    }
  }
  // BTW_TAB&MOB 해상도에서만 display: none
  .on_btw_tab_mob_resolution {
    ${customMediaQuery(BTW_TAB_AND_MOBILE_RESOLUTION)} {
      display: none;
    }
  }
  // 480px 해상도에서만 display: none;
  .on_mphone_resolution {
    ${customMediaQuery(MIDIUM_PHONE_RESOLUTION)} {
      display: none;
    }
  }
  // phone 해상도에서부터 display: none
  .on_phone_resolution {
    ${customMediaQuery(PHONE_RESOLUTION)} {
      display: none;
    }
  }

`;
