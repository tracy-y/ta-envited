import Landing from "./components/Landing";
import Create from "./components/Create";
import Event from "./components/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
