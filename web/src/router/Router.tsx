import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home/Home";
import { Users } from "../pages/users/Users";
import { Bats } from "../pages/bats/Bats";
import { Auth } from "../pages/auth/Auth";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bats" element={<Bats />} />
          <Route path="/users" element={<Users />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch() {
  return <div className="text-center text-2xl mt-12">No page here 🙅‍♂️</div>;
}
