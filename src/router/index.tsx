import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/404";
import BeerList from "../views/BeerList";
import Beer from "../views/Beer";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const Router = () => (
  <BrowserRouter>
    <TopBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="beer">
        <Route index element={<BeerList />} />
        <Route path=":id" element={<Beer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
