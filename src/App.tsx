import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./routes/Rotas";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
};

export default App;
