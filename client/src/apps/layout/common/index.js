import Header from "./header";

export { Header };

const CommonLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      {children}
    </div>
  );
};

export default CommonLayout;
