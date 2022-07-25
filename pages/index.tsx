import type { NextPage } from "next";
import Welcome from "../components/welcome/welcome";
import { Inner } from "./global.styles";

const Home: NextPage = () => {
  return (
    <Inner wide>
      <Welcome />
    </Inner>
  );
};

export default Home;
