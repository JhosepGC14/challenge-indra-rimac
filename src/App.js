import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/detalle-vehicular/:id"
            component={DetalleVehicularPage}
          />
          <Route exact path="/planes-cobertura/:id" component={PlanesPage} />
          <Route exact path="/despedida" component={DespedidaPage} />
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
