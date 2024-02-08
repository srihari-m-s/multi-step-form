import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import FormPage from "./components/main/FormPage/FormPage";

function App() {
  const [activePage, setActivePage] = useState("1");

  function handlePageClick(e) {
    setActivePage(e.target.id);
  }

  function handleNext() {
    setActivePage((prev) => String(+prev + 1));
  }

  function handleBack() {
    setActivePage((prev) => String(+prev - 1));
  }

  return (
    <div className="container mx-auto">
      <div className="h-screen">
        <Sidebar activePage={activePage} handlePageClick={handlePageClick} />
        <FormPage
          activePage={activePage}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default App;
