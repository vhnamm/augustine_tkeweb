import "./GlobalStyle.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "~components/routes/routes.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
