import React, { useEffect, useState } from "react";
import totalflat from "../../images/total-flat-sq.svg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from "../../images/tuev_500.png";
import { Form, Col } from "react-bootstrap";
import Checkbox from "react-custom-checkbox";
import tick from "../../images/tick.png";

const StepTwo = ({ setForm, formData, navigation }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(12);
  const [state, setState] = useState(false);
  const [one, setOne] = useState(false);

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  React.useEffect(() => {
    if (state === true || one === true) {
      setTimeout(() => {}, 500);
    }
  });

  return (
    <div className="form">
      <h4 className="Form-Header">
        Ihr <strong>Geburtsdatum</strong>
      </h4>
      <div>
        <Form className="">
          <Form.Row className="form-row-custom-checkbox">
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <div className="check-boc-custom">
                <Checkbox
                  name="one"
                  checked={one}
                  icon={<img src={tick} style={{ width: 24 }} alt="" />}
                  borderColor={(checked) =>
                    checked === true ? "white" : "grey"
                  }
                  borderRadius={4}
                  size={22}
                  label=" weiblich"
                  onChange={(checked) => {
                    if (checked) {
                      setOne(true);
                      setState(false);
                    }
                  }}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <div className="check-boc-custom">
                <Checkbox
                  name="two"
                  checked={state}
                  icon={<img src={tick} style={{ width: 24 }} alt="" />}
                  borderColor="grey"
                  borderRadius={4}
                  size={24}
                  label=" männlich
                "
                  onChange={(checked) => {
                    if (checked) {
                      setOne(false);
                      setState(true);
                    }
                  }}
                />
              </div>
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

export default StepTwo;
