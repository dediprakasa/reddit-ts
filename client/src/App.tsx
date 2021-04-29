import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Provider, createClient } from "urql";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Register from "./pages/Register";
import Tabs from "./Tabs";
import Login from "./pages/Login";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

const App: React.FC = () => (
  <Provider value={client}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/register">
            <Redirect to="/main/tab3" />
          </Route>
          <Route path="/login">
            <Redirect to="/main/tab3" />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/main/tab1" />
          </Route>
        </IonRouterOutlet>
        <Route path="/main">
          <Tabs />
        </Route>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
