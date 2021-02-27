import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [text, setText] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = () => {
    setIsLoading(!isLoading);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Username</IonLabel>
          <IonInput value={text}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" value={password}></IonInput>
        </IonItem>
        <IonButton
          expand="block"
          color="primary"
          onClick={() => handleSubmit()}
        >
          {isLoading ? <IonSpinner /> : <IonLabel>Register</IonLabel>}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Register;
