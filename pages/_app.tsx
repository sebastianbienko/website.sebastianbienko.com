import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MenuWrapper, Root, SloganWrapper } from "../layout/global.styles";
import { Menu, Slogan } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />

      <SloganWrapper>
        <Slogan />
      </SloganWrapper>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </Root>
  );
}

export default MyApp;
