import React, { useEffect, useState } from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'
import verkaufen from '../../images/verkaufen.svg'
import kauf from '../../images/kaufen.svg'
import sonstige from '../../images/sonstige.svg'
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import ProgressBar from "../progress-bar/ProgressBar";

const Styles = styled.div`

.btn-primary {
  color:#024B54;
  background-color: white;
  border: none;
  
  border-radius: 0px;
  font-size: x-large;
  margin-left: 10px;
  box-shadow: rgb(0 0 0 / 16%) 5px 5px 20px;
  text-decoration: #024B54;
  font-size: 16px;
  width: 225px;
  height: 350px;
}
.btn-img{
  display: block;
  height: 64px;
  max-width: 100%;
  margin-left: 68px;
  margin-bottom: 5px;
}


`;




const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;
  const [value, setValue] = useState(89);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 9;

        return newValue;
      });
    }, 200);
  }, []);

  return (
    <div className="form">
       
     
      <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">Wofür benötigen Sie den Immobilienwert?</p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>

      <div className="btn_container">
        <Styles>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={verkaufen} />Verkauf</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={kauf} />Kauf</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={sonstige} />Sonstiges</Button>
        </Styles>
      </div>
      <div className="btn_container_mobile">
      <Button variant="primary" onClick={next} value="Weiter">&nbsp;Verkauf</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;Kauf</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;Sonstiges</Button>
      </div>

    

      <img
        src={formImageTwo}
        alt="img"
        className="imageCover"
      />
    </div>
    
  );
};

export default StepOne;