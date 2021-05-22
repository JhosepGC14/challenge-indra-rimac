import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import HomePage from "./pages/home";
import DetalleVehicularPage from "./pages/detalles";

import "./custom.scss";
import PlanesPage from "./pages/planes";
import DespedidaPage from "./pages/despedida";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/detalle-vehicular">
            <DetalleVehicularPage />
          </Route>
          <Route exact path="/planes-cobertura">
            <PlanesPage />
          </Route>
          <Route exact path="/despedida">
            <DespedidaPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
