import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { RequestRide } from "./pages/RequestRide";
import { MyRides } from "./pages/MyRides";
import { RideDetails } from "./pages/RideDetails";
import { Messages } from "./pages/Messages";
import { Profile } from "./pages/Profile";
import { RideCancelled } from "./pages/RideCancelled";
import { SelectParent } from "./pages/SelectParent";
import { ParentProfile } from "./pages/ParentProfile";
import { RequestConfirmation } from "./pages/RequestConfirmation";
import { OfferHelp } from "./pages/OfferHelp";
import { Notifications } from "./pages/Notifications";
import { NotificationDetail } from "./pages/NotificationDetail";
import { RequestAccepted } from "./pages/RequestAccepted";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/request-ride",
    element: <RequestRide />,
  },
  {
    path: "/select-parent",
    element: <SelectParent />,
  },
  {
    path: "/parent-profile/:id",
    element: <ParentProfile />,
  },
  {
    path: "/request-confirmation",
    element: <RequestConfirmation />,
  },
  {
    path: "/offer-help",
    element: <OfferHelp />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/notification-detail",
    element: <NotificationDetail />,
  },
  {
    path: "/request-accepted",
    element: <RequestAccepted />,
  },
  {
    path: "/my-rides",
    element: <MyRides />,
  },
  {
    path: "/rides/:id",
    element: <RideDetails />,
  },
  {
    path: "/ride-cancelled",
    element: <RideCancelled />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);