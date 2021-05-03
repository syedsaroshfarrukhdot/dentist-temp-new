import React,{useEffect,useState} from "react";
import formImageTwo from '../../images/ekom-sign.png'
import { Button ,ButtonGroup } from 'react-bootstrap';
import ProgressBar from '../progress-bar/ProgressBar'
import Slider from '../slider/Slider'



const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(90);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue(oldValue => {
        const newValue = oldValue +10;


        return newValue;
      });
    },200);
  }, []);


  return (
    <div className="form">
      
  
    <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">Wie hoch ist Ihr monatliches Haushaltsnettoeinkommen?</p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>
  

    <div className="btn_container">
      <div className="align_btn">
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "1000 bis 1500 EUR";
              next();
              console.log(formData);
            }} value="1000 bis 1500 EUR">1000 bis 1500 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "1501 bis 2000 EUR";
              next();
              console.log(formData);
            }} value="1501 bis 2000 EUR">1501 bis 2000 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "2001 - 2500 EUR";
              next();
              console.log(formData);
            }} value="2001 - 2500 EUR">2001 - 2500 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "2501 - 3000 EUR";
              next();
              console.log(formData);
            }} value="2501 - 3000 EUR">2501 - 3000 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "3001 - 3500 EUR";
              next();
              console.log(formData);
            }} value="3001 - 3500 EUR">3001 - 3500 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = ">3501 - 4000 EUR";
              next();
              console.log(formData);
            }} value="3501 - 4000 EUR">3501 - 4000 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "Über 4000 EUR";
              next();
              console.log(formData);
            }} value="Über 4000 EUR">Über 4000 EUR</Button>
      </div> 
    </div>
    
    <div className="progress_bar_container">
      <div className="progress_align">
      <ProgressBar color={"#577B0A"} width={"300px"} value={value} max={100} />
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