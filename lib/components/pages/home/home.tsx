import * as React from "react";
import HomeTemplate from "../../templates/home/home";

export interface HomeProps {
  isBlockedIn?: boolean;
}

const Home = ({ isBlockedIn = false }: HomeProps) => {
  return <HomeTemplate isBlockedIn={isBlockedIn} />;
};

export default Home;
