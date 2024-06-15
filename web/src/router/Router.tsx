import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Bats } from "../pages/bats/Bats";
import { Users } from "../pages/users/Users";
import { Layout } from "../layout/Layout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bats" element={<Bats />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch() {
  return <div className="text-center text-2xl mt-12">No page here s🙅‍♂️</div>;
}
