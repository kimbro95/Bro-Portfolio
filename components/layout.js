import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <h1>Layout</h1>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
