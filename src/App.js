import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemPage from "./components/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index  element={<ItemList />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
