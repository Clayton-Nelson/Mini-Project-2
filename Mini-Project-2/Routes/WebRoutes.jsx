import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import MyList from "../pages/MyList";
import PopularLists from "../pages/PopularLists";
import PageNotFound from "../pages/PageNotFound";
import {
  Lists,
  Friends,
  Billionares,
  Actors,
  BruceLee,
} from "../pages/PopularLists";

export default function WebRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home {...props} />} />
      <Route path="mylist" element={<MyList {...props} />} />

      <Route path="popularlists" element={<PopularLists {...props} />}>
        <Route index element={<Lists />} />
        <Route path="friends" element={<Friends />} />
        <Route path="billionares" element={<Billionares />} />
        <Route path="actors" element={<Actors />} />
        <Route path="brucelee" element={<BruceLee />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
