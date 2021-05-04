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
      <h4 className="Form-Header step11-size">
      Wie kann ich Sie <b>zur Angebotserstellung erreichen?</b>
      </h4>
      <div>
        <Form className="">
          <Form.Row className="form-row-custom">
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom9">Vor- / Nachname:</Form.Label>
              <Form.Control
                required
                className="form-address"
                type="text"
                label="lhre Name"
                placeholder="PLZ"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom9">Telefon:</Form.Label>

              <Form.Control
              required
                className="form-address"
                type="text"
                label="Ort"
                placeholder="lhre Telefon:"
                onChange={(event) => (formData.firstName = event.target.value)}
              />
            </Form.Group>
            <div className="discription">Um alle <b>Testsieger-Vorteile</b> zu erhalten, ist eine  <b className="bold-red">korrekte</b> <b>Telefonnummer notwendig.</b>  Alle Aktions-Vorteile werden für Sie persönlich reserviert.
</div>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Form.Label className="form-label-custom9">E-Mail:</Form.Label>

              <Form.Control
              required
                className="form-address"
                type="text"
                label="Straße / Nr."
                placeholder="lhre E-Mail:"
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
          <span className="glyphicon glyphicon-menu-right"></span> JETZT
          VERGLEICHEN
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
