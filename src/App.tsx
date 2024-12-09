import React from "react";
import "./index.css";
import SignUp from "./components/SignUp/SignUp.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Registration/Registr.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="registr" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
