import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
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
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";

const SiteRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route
              path="/foods/:foodId"
              element={
                <PrivateRoute>
                  <SingleFood />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-food"
              element={
                <PrivateRoute>
                  <AddFood />
                </PrivateRoute>
              }
            />
            <Route
              path="/food/edit"
              element={
                <PrivateRoute>
                  <EditFood />
                </PrivateRoute>
              }
            />
            <Route
              path="/manage-foods"
              element={
                <PrivateRoute>
                  <ManageFoods />
                </PrivateRoute>
              }
            />
            <Route
              path="/manage-foods/1"
              element={
                <PrivateRoute>
                  <ManageSingleFood />
                </PrivateRoute>
              }
            />
            <Route
              path="/request-foods"
              element={
                <PrivateRoute>
                  <FoodRequests />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SiteRoutes;
