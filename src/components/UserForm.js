import React from "react";
import { Formik, Field } from "formik";
import { values } from "./helpers/initialValues";
import { getNames, auditValues } from "./helpers/utils";

const CreateFields = ({ name }) => {
  return (
    <div>
      <h4>{name}:</h4>
      <Field autoComplete="off" type="text" name={name} />
    </div>
  );
};

const UserForm = () => {
  return (
    <div>
      <Formik
        initialValues={values}
        onSubmit={(values, actions) => {
          auditValues(values);
          actions.setSubmitting(false);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="ui form">
            {getNames(props.initialValues).map(name => (
              <CreateFields name={name} key={name} />
            ))}
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button className="ui button primary" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
