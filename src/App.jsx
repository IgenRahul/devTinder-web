import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<Body />}>
          <Route path="login" element={<Login />} />
          <Route path="connection" element={<>Connection</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
