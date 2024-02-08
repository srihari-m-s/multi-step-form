import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import FormPage from "./components/main/FormPage/FormPage";
import FormProvider from "./contexts/FormContext/FormProvider";

function App() {
  const [activePage, setActivePage] = useState("1");

  function handlePageClick(page) {
    setActivePage(page);
  }

  function handleNext() {
    setActivePage((prev) => String(+prev + 1));
  }

  function handleBack() {
    setActivePage((prev) => String(+prev - 1));
  }

  function handleChange() {
    setActivePage("1");
  }

  return (
    <FormProvider>
      <div className="container mx-auto h-screen lg:bg-magnolia lg:grid lg:place-items-center">
        <div className="lg:grid lg:grid-cols-[275px_calc(100%-275px)] lg:bg-white lg:h-[calc(568px+2*1rem)] lg:p-4 lg:rounded-xl lg:shadow-lg">
          <Sidebar activePage={activePage} handlePageClick={handlePageClick} />
          <FormPage
            activePage={activePage}
            handleBack={handleBack}
            handleNext={handleNext}
            handleChange={handleChange}
          />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
