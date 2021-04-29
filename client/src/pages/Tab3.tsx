import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { useMeQuery } from "../generated/graphql";
import { useHistory } from "react-router";
import Login from "../pages/Login";

const Tab3: React.FC = () => {
  const [{ data, fetching }] = useMeQuery();
  const history = useHistory();
  let content = null;
  if (fetching) {
  } else if (!data?.me) {
    // history.push("/login");
  } else {
    content = (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem button>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }
  return <>{data?.me ? content : <Login />}</>;
};

export default Tab3;
