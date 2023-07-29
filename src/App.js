import logo from "./logo.svg";
import "./App.css";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Jobcomponent from "./components/Job_components/Job_component";
import Companycomponent from "./components/company_components/company_component";

// export const user_context = createContext();

function App() {
  return (
    <>
      {/* <user_context.createContext> */}
      <Routes>
        <Route
          path="/add_job/:id"
          element={
            <>
              <Jobcomponent />
            </>
          }
        ></Route>
        <Route
          path="/add_compony"
          element={
            <>
              <Companycomponent />
            </>
          }
        ></Route>
      </Routes>
      {/* </user_context.createContext> */}
    </>
  );
}

export default App;
