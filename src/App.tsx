import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampusMap from "./pages/CampusMap";
import Library from "./pages/Library";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CampusMap />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
