import React from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import firestore from "../firebase/firebase";

const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <Link to={"/"}>Home</Link>

      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="name" placeholder="Name" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <label>
        <Field type="checkbox" name="management" checked={values.management} />
        Management Level
      </label>
      <Field component="select" name="country">
        <option value="singapore">Singapore</option>
        <option value="malaysia">Malaysia</option>
        <option value="thailand">Thailand</option>
        <option value="taiwan">Taiwan</option>
        <option value="japan">Japan</option>
      </Field>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

const FormScreen = withFormik({
  mapPropsToValues({ name, email, management, country }) {
    return {
      name: name || "",
      email: email || "",
      management: management || false,
      country: country || "singapore"
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Must be valid email")
      .required("Email is required")
  }),
  async handleSubmit(
    values,
    {
      resetForm,
      setErrors,
      setSubmitting,
      props: { history }
    }
  ) {
    try {
      await firestore.collection("employees").add(values);
      resetForm();
      setSubmitting(false);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }
})(App);

export default FormScreen;
