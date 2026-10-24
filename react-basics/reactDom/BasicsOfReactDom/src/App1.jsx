import React from "react";
import One from "./dynamicRoutes/One";
import { Route, Routes, useParams } from "react-router-dom";



const App1 = () => {




  return (
    <div>
      <Routes>

        <Route path="/user/:id" element={<One/>} />

      </Routes>
    </div>
  );
};

export default App1;
