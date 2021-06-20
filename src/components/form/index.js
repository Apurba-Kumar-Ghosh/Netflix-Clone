import React from "react";
import {
  Container,
  Title,
  Input,
  Link,
  Text,
  Base,
  Error,
  Submit,
  TextSmall,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};
Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};
Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}> {children}</Link>;
};
Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}> {children}</Text>;
};
Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}> {children}</TextSmall>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}> {children}</Base>;
};
Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}> {children}</Error>;
};
Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}> {children}</Submit>;
};
