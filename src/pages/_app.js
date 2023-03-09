import "../styles/bootstrap.min.css";
import "../styles/common.scss";
import "../styles/common.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "@/store";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...props} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
