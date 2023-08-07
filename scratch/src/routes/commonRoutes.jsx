import { Route } from "react-router-dom";
import { Landing } from "../pages";

const commonRoutes = () => (
  <>
    <Route path="/" element={<Landing />} />
  </>
);

export default commonRoutes;
