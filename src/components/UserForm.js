import React from "react";
import { Formik, Field } from "formik";
import { getNames, auditValues } from "./helpers/utils";
import { objToArr } from "./helpers/utils";

const CreateFields = ({ name }) => {
  return (
    <div>
      <h4>{name}:</h4>
      <Field autoComplete="off" type="text" name={name} />
    </div>
  );
};

const UserForm = props => {
  return (
    <div>
      <Formik
        initialValues={props.init}
        onSubmit={(values, actions) => {
          props.extractValues(objToArr(auditValues(values)));
          actions.setSubmitting(false);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="ui form">
            {getNames(props.initialValues).map(name => (
              <CreateFields name={name} key={name} />
            ))}
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
