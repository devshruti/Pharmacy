import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import HealthCare from "./HealthCare";
import HealthyFood from "./HealthyFood";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Payment from "./Payment";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
           </PrivateRoute>
        }
      />
      <Route
        path="/Payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
      <Route
        path="/healthcare"
        element={
          <PrivateRoute>
            <HealthCare />
          </PrivateRoute>
        }
      />
      <Route
        path="/healthyfood"
        element={
          <PrivateRoute>
            <HealthyFood />
           </PrivateRoute>
        }
      />
      <Route
        path="/healthfood/:id"
        element={
          <PrivateRoute>
            <ProductDetails />
           </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
