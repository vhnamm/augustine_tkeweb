import "./GlobalStyle.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "~components/routes/routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
