import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";
import InputField from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

const Login: React.FC<{}> = () => {
  const [text, setText] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, login] = useLoginMutation();
  const history = useHistory();

  const handleSubmit = () => {
    setIsLoading(!isLoading);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({ options: values });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              history.push("/");
            }
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
                {isSubmitting ? <IonSpinner></IonSpinner> : "Login"}
              </IonButton>
              <IonButton
                routerLink="/register"
                expand="block"
                className="ion-margin-top"
              >
                Register
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};
export default Login;
