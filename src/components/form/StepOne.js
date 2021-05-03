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
              <Form.Label className="form-label-custom">Tag</Form.Label>
              <Form.Control
                required
                className="form-m-d"
                type="number"
                label="TT"
                placeholder="TT"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom">Monat</Form.Label>

              <Form.Control
              required
                className="form-m-d"
                type="number"
                label="MM"
                placeholder="MM"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom">Jahr</Form.Label>

              <Form.Control
              required
                className="form-y"
                type="number"
                label="JJJJ"
                placeholder="JJJJ"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>

      <div className="btn_container">
        <Button variant="primary" onClick={next} value="Weiter">
          <b>></b>
          <span className="glyphicon glyphicon-menu-right"></span> WEITER
          <br></br>
          <small>( Schritt 1 von 2 )</small>
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
