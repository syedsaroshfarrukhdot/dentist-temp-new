import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import house from "../../images/house-sq.svg";
import formImageTwo from '../../images/tuev_500.png'




const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(19);

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
      Welche Fläche hat das Grundstück des Hauses?
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
            left_text="<200 m²"
            right_text=">2500 m²"
            value="1250"
            min="200"
            max="2500"
            unit="m²"
            text="Alternativ eintippen"
            callBackFromParent={myCallBack}
          />
           <img className="img_slider_sasas" src={house} />
          
        </div>
        <Button variant="danger" onClick={next} >Weiter ></Button>
      </div>

      <div className="btn_container_slider_mobile_slider">
      <img className="img_slider_sasas" src={house} />
      <div className="Row_MultiStep">
          <Slider
            left_text="<200 m²"
            right_text=">2500 m²"
            value="1250"
            min="200"
            max="2500"
            unit="m²"
            text="Alternativ eintippen"
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
