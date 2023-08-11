import routes from "@/routes";
import { Footer, Navbar, SimpleFooter } from ".";

export const Public = ({ children }) => (
  <>
    <Navbar routes={routes} />
    {children}
    <Footer />
    <Footer />
    <Footer />
    <Footer />
    <Footer />
  </>
);

export const Simple = ({ children }) => (
  <div className="flex h-screen flex-col bg-primary">
    <Navbar routes={routes} />
    {children}
    <SimpleFooter />
  </div>
);
