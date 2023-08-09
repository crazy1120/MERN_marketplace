import routes from "@/routes";
import { Footer, Navbar, SimpleFooter } from ".";

export const Public = ({ children }) => (
  <>
    <Navbar routes={routes} />
    {children}
    <Footer />
  </>
);

export const Simple = ({ children }) => (
  <>
    <Navbar routes={routes} />
    {children}
    <SimpleFooter />
  </>
);
