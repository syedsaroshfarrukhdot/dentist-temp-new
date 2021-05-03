import React, { useEffect, useState } from "react";
import map from "../../images/map.png";
import pin from "../../images/pin-grey.svg";
import formImageTwo from '../../images/tuev_500.png'

import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(90);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10;

        return newValue;
      });
    }, 200);
  }, []);

  return (
    <div className="form">
     
      <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">
      In welcher Region befindet sich die Immobilie?
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
        <div className="map_slider">
          <img src={map} className="map_img"/>
          <img src={pin} className="pin_img"/>
          <div className="input_map">
          <label className="label_map">Postleitzahi</label>
          <input type="number" placeholder="z.B 12357" className="input_field_map"/>
          <p className="map_text">Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können.</p>
          <Button variant="success" onClick={next} >Weiter ></Button>
        </div>
        </div>
        
      </div>
      <div className="btn_container_slider_mobile">
        <div className="map_slider">
          <img src={map} className="map_img"/>
          <img src={pin} className="pin_img"/>
          
        </div>
        <div className="input_map">
        <label className="label_map">Postleitzahi</label>
          <input type="number" placeholder="z.B 12357" className="input_field_map"/>
          <p className="map_text">Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können.</p>
          <Button variant="success" onClick={next} >Weiter ></Button>
        </div>
      </div>
      <img
        src={formImageTwo}
        alt="img"
        className="imageCover"
      />
     </div>
  );
};

export default StepThree;
