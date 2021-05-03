import React, { useEffect, useState } from "react";
import formImageTwo from '../../images/tuev_500.png'

import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import totalflat from "../../images/baujahr.svg";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(33);

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
      
      <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">
          Wann wurde das Haus erbaut?
        </p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>

      <div className="btn_container_slider">
        <div className="Row_MultiStep">
          <Slider
            left_text="<  1900"
            right_text="> 2020"
            value="1950"
            min="1900"
            max="2020"
            step="1"
            text="Alternativ eingeben"
            callBackFromParent={myCallBack}
          />
           <img className="img_slider_sasas" src={totalflat} />
          
        </div>
        <Button variant="danger" onClick={next} >Weiter ></Button>
      </div>


      
      <div className="btn_container_slider_mobile_slider">
      <img className="img_slider_sasas" src={totalflat} />
      <div className="Row_MultiStep">
          <Slider
          left_text="<  1900"
          right_text="> 2020"
          value="1950"
          min="1900"
          max="2020"
          step="1"
          text="Alternativ eingeben"
          callBackFromParent={myCallBack}

          />
          </div>
        
      </div>
      <Button variant="danger2" onClick={next} >Weiter ></Button>
      <img
        src={formImageTwo}
        alt="img"
        className="imageCover"
      />
    </div>
  );
};

export default StepThree;
