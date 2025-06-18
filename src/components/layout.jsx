import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main style={{ padding: "80px 20px 20px 120px" }}>{children}</main>
    </>
  );
};

export default Layout;
