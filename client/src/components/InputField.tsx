import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import { Field, useField } from "formik";
import { IonItem, IonLabel, IonInput } from "@ionic/react";

type InputFieldProps = {
  name: string;
  label: string;
  type: "text" | "password" | "email";
  placeholder?: string;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const [{ name, value, onChange }, { error }] = useField(props);
  return (
    <IonItem>
      <IonLabel position="stacked">{props.label}</IonLabel>
      <IonInput
        id={name}
        value={value}
        onIonChange={onChange}
        {...props}
      ></IonInput>
      {error ? <p>Something went wrong</p> : null}
    </IonItem>
  );
};

export default InputField;
