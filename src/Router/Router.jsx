import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";

import AllDonations from "../components/AllDonations/AllDonations";
import Statistics from "../components/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";

const customiseRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch("/donation.json"),
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <AllDonations></AllDonations>,
      },
      {
        path: "/statistics",
        loader: () => fetch("/donation.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation/:id",
        loader: () => fetch("/donation.json"),
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

export default customiseRouter;
