import React, { useEffect, useState } from "react";
import totalflat from "../../images/total-flat-sq.svg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from "../../images/tuev_500.png";
import { Form, Col } from "react-bootstrap";
import Checkbox from "react-custom-checkbox";
import tick from "../../images/tick.svg";
import Styled from "styled-components";

const Container = Styled.div`
check-boc-custom{
  background-color :${(props) => props.colorBg};
}  
`;

const StepSeven = ({ setForm, formData, navigation, colorBg }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(12);
  const [state, setState] = useState(false);
  const [one, setOne] = useState(false);
  const [color, setColor] = useState("grey");
  const [color1, setColor1] = useState("grey");
  const [bgcolor, setBGColor] = useState("white");
  const [bgcolor1, setBGColor1] = useState("white");

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  React.useEffect(() => {
    if (state === true || one === true ) {
      setTimeout(() => { next()}, 800);
    }
  });

  return (
    <div className="form">
      <h4  className="Form-Header">Welche <strong>Zahnleistungen</strong> wünschen Sie?</h4>
      <div>
        <Form className="">
          <Form.Row className="form-row-custom-checkbox">
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <Container>
                <div
                  className="check-boc-custom"
                  style={{ backgroundColor: bgcolor }}
                >
                  <Checkbox
                    name="one"
                    checked={one}
                    icon={
                      <img
                        src={tick}
                        style={{ width: 24, fill: "white" }}
                        alt=""
                      />
                    }
                    borderColor={color}
                    borderRadius={4}
                    size={24}
                    label="Ja"
                    onChange={(checked) => {
                      if (checked) {
                        setOne(true);
                        setState(false);
                        setColor("#59ADB7");
                        setBGColor("#59ADB7");
                        setColor1("grey");
                        setBGColor1("white");
                      }
                      if (!checked) {
                        setColor("grey");
                        setBGColor("white");
                      }
                    }}
                  />
                </div>
              </Container>
            </Form.Group>
            <Form.Group controlId="formGridFname" className="form-group-custom">
              <div
                className="check-boc-custom"
                style={{ backgroundColor: bgcolor1 }}
              >
                <Checkbox
                  name="two"
                  checked={state}
                  icon={
                    <img
                      src={tick}
                      style={{ width: 24, fill: "white" }}
                      alt=""
                    />
                  }
                  borderColor={color1}
                  borderRadius={4}
                  size={24}
                  label="Nein"
                  onChange={(checked) => {
                    if (checked) {
                      setOne(false);
                      setState(true);
                      setColor1("#59ADB7");
                      setBGColor1("#59ADB7");
                      setColor("grey");
                      setBGColor("white");
                    }
                    if (!checked) {
                      setColor1("grey");
                      setBGColor1("white");
                    }
                  }}
                />
              </div>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>

     
    </div>
  );
};

export default StepSeven;
