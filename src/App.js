import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./Pages/Home";

function App() {
  return (
    <Layout>
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
