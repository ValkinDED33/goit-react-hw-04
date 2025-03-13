import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^(\+?\d{1,2}[-\s]?)?(\(?\d{3}\)?[-\s]?)?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={css.input}
        />
        <ErrorMessage name="name" component="div" className={css.error} />
        <Field
          type="tel"
          name="number"
          placeholder="Phone number"
          className={css.input}
        />
        <ErrorMessage name="number" component="div" className={css.error} />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
