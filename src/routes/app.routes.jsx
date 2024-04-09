import { Routes, Route } from "react-router-dom";

import { AdmEditExistingPlate } from "../pages/AdmEditExistingPlate";
import { AdmAddNewPlates } from "../pages/AdmAddNewPlates";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { UserPayment } from "../pages/UserPayment";
import { UserOrders } from "../pages/UserOrders";
import { AdmOrders } from "../pages/AdmOrders";
import { UserFavs } from "../pages/UserFavs";
import { AdmFavs } from "../pages/AdmFavs";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/AdminEdit/:id" element={<AdmEditExistingPlate />} />
      <Route path="/AdminAddPlate" element={<AdmAddNewPlates />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/" element={<Home />} />
      <Route path="/Payment" element={<UserPayment />} />
      <Route path="/OrderHistory" element={<UserOrders />} />
      <Route path="/OrderHistoryAdm" element={<AdmOrders />} />
      <Route path="/Favorites" element={<UserFavs />} />
      <Route path="/FavoritesAdmin" element={<AdmFavs />} />
    </Routes>
  );
}
