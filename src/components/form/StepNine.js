import React, { useEffect, useState } from "react";
import formLogo from "../../images/icon-wohngeld.png";
import formImageTwo from "../../images/tuev_500.png";
import house from "../../images/house.svg";
import two from "../../images/two.svg";
import three from "../../images/three.svg";
import four from "../../images/four.svg";
import five from "../../images/five.svg";
import { Button } from "react-bootstrap";
import { Form, Col } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";

const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 12;

        return newValue;
      });
    }, 200);
  }, []);

  return (
    <div className="form">
      <h4 className="Form-Header">
        Ihr <strong>Geburtsdatum</strong>
      </h4>
      <div>
        <Form className="">
          <Form.Row className="form-row-custom">
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom9">PLZ</Form.Label>
              <Form.Control
                required
                className="form-place"
                type="text"
                label="PLZ"
                placeholder="PLZ"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom9">Ort</Form.Label>

              <Form.Control
              required
                className="form-postcode"
                type="text"
                label="Ort"
                placeholder="Ort"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom9">Straße / Nr.</Form.Label>

              <Form.Control
              required
                className="form-address"
                type="text"
                label="Straße / Nr."
                placeholder="Straße / Nr."
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
      <div className="btn_container_1_single">
        <Button
          className="animation_btn"
          variant="primary"
          onClick={next}
          value="Weiter"
        >
          <b>></b>
          <span className="glyphicon glyphicon-menu-right"></span> WEITER
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
