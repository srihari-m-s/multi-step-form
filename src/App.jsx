import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import FormPage from "./components/main/FormPage/FormPage";

function App() {
  const [activePage, setActivePage] = useState("1");

  function handlePageClick(e) {
    setActivePage(e.target.id);
  }

  return (
    <div className="container mx-auto">
      <div className="h-screen">
        <Sidebar activePage={activePage} handlePageClick={handlePageClick} />
        <FormPage activePage={activePage} />
      </div>
    </div>
  );
}

export default App;
