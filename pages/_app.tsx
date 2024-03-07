import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FooterWrapper, MenuWrapper, Root } from "../layout/global.styles";
import { Menu } from "../components";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
}

export default MyApp;
