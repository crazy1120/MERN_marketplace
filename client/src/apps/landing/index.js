import { Desktop, Mobile } from "./components";
import "./index.css";

const Landing = () => {
  return <>{500 < window.innerWidth ? <Desktop /> : <Mobile />}</>;
};

export default Landing;
