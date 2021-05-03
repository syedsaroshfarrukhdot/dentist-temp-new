import React, { useEffect, useState } from "react";
import formImageTwo from '../../images/tuev_500.png'
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import totalflat from "../../images/rooms-sq.svg";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(26);

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
        <p className="text_form2">
        Wie viele Zimmer hat das Haus?<br></br>
        (ohne Küche und Bad)
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
              left_text="<  1"
              right_text="> 15"
              value="5"
              min="1"
              max="15"
              step="1"
              unit="th"
              text="Alternativ eintippen"
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
                          left_text="<  1"
                          right_text="> 15"
                          value="5"
                          min="1"
                          max="15"
                          step="1"
                          unit="th"
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
