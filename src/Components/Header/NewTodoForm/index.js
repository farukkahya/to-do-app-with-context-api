/* ----- Librarys ----- */
import React from "react";
import { Formik, Field, Form } from "formik";
/* ----- Validation ----- */
import validationSchema from "./validations";
/* ----- Context ----- */
import { useTodos } from "../../../Contexts/TodoContext";

function NewTodoForm() {
  const { addTodo } = useTodos();
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        addTodo(values.text);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
