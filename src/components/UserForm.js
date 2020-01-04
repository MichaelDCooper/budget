import React from "react";
import { Formik, Field } from "formik";
import { values } from "./helpers/initialValues";
import { getNames } from "./helpers/utils";

const CreateFields = ({ name }) => {
  return (
    <div>
      <h4>{name}:</h4>
      <Field type="text" name={name} />
    </div>
  );
};

const UserForm = () => {
  return (
    <div>
      <Formik
        initialValues={values}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="ui form">
            {getNames(props.initialValues).map(name => (
              <CreateFields name={name} />
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
