import { Redirect, Route } from "react-router-dom";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { useMeQuery } from "./generated/graphql";

import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import { ellipse, personCircleOutline, square, triangle } from "ionicons/icons";

//   import "./Main.css";

const Tabs: React.FC = () => {
  const [{ data, fetching }] = useMeQuery();
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/main/tab1" exact={true}>
          <Tab1 />
        </Route>
        <Route path="/main/tab2" exact={true}>
          <Tab2 />
        </Route>
        <Route path="/main/tab3" exact={true}>
          <Tab3 />
        </Route>
        <Route path="/main" exact={true}>
          <Redirect to="/main/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/main/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/main/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/main/tab3">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>{data?.me ? "Account" : "Login"}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
