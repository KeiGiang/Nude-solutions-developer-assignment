import { InsuredItems } from "./pages/InsuredItems";
import { Home } from "./pages/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/insuredItems',
    element: <InsuredItems />
  },
];

export default AppRoutes;
