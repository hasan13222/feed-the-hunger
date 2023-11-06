import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Foods from "../pages/Foods/Foods";
import SingleFood from "../pages/SingleFood/SingleFood";
import AddFood from "../pages/AddFood/AddFood";
import ManageFoods from "../pages/ManageFoods/ManageFoods";
import ManageSingleFood from "../pages/ManageSingleFood/ManageSingleFood";
import EditFood from "../pages/EditFood/EditFood";
import FoodRequests from "../pages/FoodRequests/FoodRequests";
import NotFound from "../pages/NotFound/NotFound";

const SiteRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods/>} />
            <Route path="/foods/:foodId" element={<SingleFood/>} />
            <Route path="/add-food" element={<AddFood/>} />
            <Route path="/food/edit" element={<EditFood/>} />
            <Route path="/manage-foods" element={<ManageFoods />} />
            <Route path="/manage-foods/1" element={<ManageSingleFood/>} />
            <Route path="/request-foods" element={<FoodRequests/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SiteRoutes;
