import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import Checkbox from "./CheckBox/CheckBox";
import CheckboxGroup from "./CheckBox/CheckBoxGroup";
import Response from "./Response/Response";
import * as Yup from "yup";
import "./App.css";
import SpaceSeparatedInput from "./SpaceSeperatedInput/SpaceSeperatedInput";

const schema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Do you really have such a long Name?")
    .required("Please enter your name, We dont want to think you are a Bot"),
  email: Yup.string()
    .email("This doesn't look like an email.")
    .required("So how do you expect us to contact you?"),
  about: Yup.string()
    .min(300, "Is that all you know about you?")
    .required("Tell us something about you."),
  urls: Yup.array(Yup.string().url("A valid URL Looks like https://obedamoasi.com")).required(
    "Like Seriously you are not on the internet?"
  ),
  teams: Yup.array(Yup.string()).required("Choose a destination")
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      applied: false
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.applied ? (
          <div className="container">
            <Response name={this.state.name} />
          </div>
        ) : (
          <div className="container main">
            <div className="row">
              <h1>Apply Now</h1>
            </div>
            <div className="row">
              <h4 style={{ textAlign: "center" }}>
                We'd love to work with you!
              </h4>
            </div>
            <div className="row input-container">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  about: "",
                  teams: [],
                  urls: []
                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true)
                  console.log(values);
                  this.setState({applied:true, name: values.name });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  isSubmitting,
                  setFieldTouched
                }) => (
                  <Form>
                    <div className="col-xs-12 col-sm-6">
                      <div style={{paddingLeft:"0px"}} className="col-xs-12">
                        <div className="styled-input">
                          <Field name="name" type="text" required />
                          <label>Name</label>
                        </div>
                      </div>
                      <div style={{paddingLeft:"0px"}} className="col-xs-12 col-sm-12">
                        <div className="styled-input ">
                          <Field type="text" name="email" required />
                          <label>Email</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <CheckboxGroup
                        id="teams"
                        label="Choose your team(s)"
                        value={values.teams}
                        error={errors.teams}
                        touched={touched.teams}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      >
                        <Field
                          component={Checkbox}
                          name="teams"
                          id="android"
                          label="Android"
                        />
                        <Field
                          component={Checkbox}
                          name="teams"
                          id="ios"
                          label="IOS"
                        />
                        <Field
                          component={Checkbox}
                          name="teams"
                          id="frontend"
                          label="Frontend"
                        />
                        <Field
                          component={Checkbox}
                          name="teams"
                          id="backend"
                          label="Backend"
                        />
                        <Field
                          component={Checkbox}
                          name="teams"
                          id="design"
                          label="Design"
                        />
                      </CheckboxGroup>
                    </div>

                    <div className="col-xs-12 ">
                      <div className="styled-input wide ">
                        <Field component={"textarea"} name="about" required />
                        <label>About Me</label>
                      </div>
                      <div className="styled-input wide">
                        <SpaceSeparatedInput
                          onChange={value => setFieldValue("urls", value)}
                          required
                          label="Links Online"
                          title="A selection of urls(comma or space separated), portfolios, projects, LinkedIn, GitHub, Bitbucket"
                        />
                      </div>
                    </div>

                    <div className="col-xs-12">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-lrg submit-btn"
                      >
                        Apply Now
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
