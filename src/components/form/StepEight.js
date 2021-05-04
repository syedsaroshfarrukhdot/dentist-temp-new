import React, { useEffect, useState } from "react";
import totalflat from "../../images/total-flat-sq.svg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from '../../images/tuev_500.png'


const StepEight = ({ setForm, formData, navigation }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(12);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 7;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  return (
    <div className="form">
      <h4 className="Form-Header">Wünschen Sie eine <strong>Selbstbeteiligung</strong>?</h4>
      <div className="">
        <div className="">
          <Slider
            left_text="<50 m²"
            right_text=">500 m²"
            value="0"
            min="0"
            max="450"
            step="150"
            unit="m²"
            text="Alternativ eintippen"
            callBackFromParent={myCallBack}
          />
          
    </div>
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

export default StepEight;
