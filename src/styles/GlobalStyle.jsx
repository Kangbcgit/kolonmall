import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.ttf') format("truetype");
    font-display: swap;
}
  //reset
  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {margin:0;padding:0}
  h1, h2, h3, h4, h5, h6 {font-size:100%;font-weight:400}
  ul {list-style:none}
  button, input, select {margin:0}
  html {box-sizing:border-box}
  *, :after, :before {box-sizing:inherit}
  img, video {height:auto;max-width:100%}
  iframe {border:0}
  table {border-collapse:collapse;border-spacing:0}
  td, th {padding:0}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  :root {
    //공통 폰트 설정
    font-size: 15px;
    font-family: pretendard;
  }
`;

const size = {
  desktop: 1024,
  tablet: 1023,
  mobile: 540
}
export const media = {
  desktop: `(min-width: ${size.desktop}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  mobile: `(max-width: ${size.mobile}px)`,
}

//규격화 스타일드 컴포넌트
export const Wrapper = styled.div`
  display: ${props => props.display || 'block'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'start'};
`;
export const Inner = styled.div`
  width: 100vw;
  max-width: 1800px;
  margin: 0 auto;
`;

export default GlobalStyle