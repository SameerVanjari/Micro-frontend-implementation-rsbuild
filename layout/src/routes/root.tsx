import Layout from "@/components/Layout";
import Chat from "@/pages/Chat";
import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
