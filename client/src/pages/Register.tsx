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
import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import InputField from "../components/InputField";

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
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                label="Username"
                type="text"
                placeholder="e.g. johndoe"
              />
              <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="Minimum of 4 characters"
              />
              <IonButton
                type="submit"
                expand="block"
                className="ion-margin-top"
              >
                {isSubmitting ? <IonSpinner></IonSpinner> : "Register"}
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};
export default Register;
