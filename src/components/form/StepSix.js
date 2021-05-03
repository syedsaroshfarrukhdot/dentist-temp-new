import React, { useEffect, useState } from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'

import own_use from '../../images/own-use.svg'
import rented from '../../images/rented.svg'
import half_rented from '../../images/half-rented.svg'
import free from '../../images/free.svg'
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
  width: 185px;
  height: 350px;
}
.btn-img{
  display: block;
  height: 64px;
  max-width: 100%;
  margin-left: 50px;
  margin-bottom: 5px;
}


`;




const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;
  const [value, setValue] = useState(40);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 40;

        return newValue;
      });
    }, 200);
  }, []);


  return (
    <div className="form">
       
     
      <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">Ist das Haus vermietet?</p>
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
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={own_use} />Ei­gen­nut­zung</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={rented} />Ver­mie­tet</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={half_rented} />Teil­ver­mie­tet</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={rented} />Leer­ste­hend</Button>
        
        </Styles>
      </div>
      <div className="btn_container_mobile">
      <Button variant="primary" onClick={next} value="Weiter">&nbsp;Ei­gen­nut­zung</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;Ver­mie­tet</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;Teil­ver­mie­tet</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;Leer­ste­hend</Button>
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