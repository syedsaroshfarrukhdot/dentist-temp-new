import React, { useState } from "react";
import styled from "styled-components";
import NumberFormat from "./NumberFormat";
import { Button, ButtonGroup } from "react-bootstrap";

const sliderThumbStyles = (props) => `
    width:25px;
    height:25px;
    border-radius: 50%; 
    padding:10px;
    background :#004B54;
    cursor : pointer;
    -webkit-transition : .2s;
    transition : opacity .2s
   
  
   
`;

const Styles = styled.div`

flex-direction:column;
align-items:center;
color:#004B54;
margin-top: 2rem;
margin-bottom : 2rem;
margin-left: 4rem;
margin-right: 5rem;

@media (max-width: 600px) {

    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -50px;
}


input {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  min-height: 45px;
  overflow: hidden;
  width: 400px;
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    width: 90%;
    margin-left: 22px;
  }
}

input:focus {
  box-shadow: none;
  outline: none;
}

input::-webkit-slider-runnable-track {
  background: #004B54;
  content: '';
  height: 8px;
  pointer-events: none;
}

input::-webkit-slider-thumb {
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  appearance: none;
  background: #004B54;
  border-radius: 50%;
  box-shadow:#c7c7c7  !important;
  box-shadow: 5px 0 0 -8px #c7c7c7, 6px 0 0 -8px #c7c7c7, 7px 0 0 -8px #c7c7c7, 8px 0 0 -8px #c7c7c7, 9px 0 0 -8px #c7c7c7, 10px 0 0 -8px #c7c7c7, 11px 0 0 -8px #c7c7c7, 12px 0 0 -8px #c7c7c7, 13px 0 0 -8px #c7c7c7, 14px 0 0 -8px #c7c7c7, 15px 0 0 -8px #c7c7c7, 16px 0 0 -8px #c7c7c7, 17px 0 0 -8px #c7c7c7, 18px 0 0 -8px #c7c7c7, 19px 0 0 -8px #c7c7c7, 20px 0 0 -8px #c7c7c7, 21px 0 0 -8px #c7c7c7, 22px 0 0 -8px #c7c7c7, 23px 0 0 -8px #c7c7c7, 24px 0 0 -8px #c7c7c7, 25px 0 0 -8px #c7c7c7, 26px 0 0 -8px #c7c7c7, 27px 0 0 -8px #c7c7c7, 28px 0 0 -8px #c7c7c7, 29px 0 0 -8px #c7c7c7, 30px 0 0 -8px #c7c7c7, 31px 0 0 -8px #c7c7c7, 32px 0 0 -8px #c7c7c7, 33px 0 0 -8px #c7c7c7, 34px 0 0 -8px #c7c7c7, 35px 0 0 -8px #c7c7c7, 36px 0 0 -8px #c7c7c7, 37px 0 0 -8px #c7c7c7, 38px 0 0 -8px #c7c7c7, 39px 0 0 -8px #c7c7c7, 40px 0 0 -8px #c7c7c7, 41px 0 0 -8px #c7c7c7, 42px 0 0 -8px #c7c7c7, 43px 0 0 -8px #c7c7c7, 44px 0 0 -8px #c7c7c7, 45px 0 0 -8px #c7c7c7, 46px 0 0 -8px #c7c7c7, 47px 0 0 -8px #c7c7c7, 48px 0 0 -8px #c7c7c7, 49px 0 0 -8px #c7c7c7, 50px 0 0 -8px #c7c7c7, 51px 0 0 -8px #c7c7c7, 52px 0 0 -8px #c7c7c7, 53px 0 0 -8px #c7c7c7, 54px 0 0 -8px #c7c7c7, 55px 0 0 -8px #c7c7c7, 56px 0 0 -8px #c7c7c7, 57px 0 0 -8px #c7c7c7, 58px 0 0 -8px #c7c7c7, 59px 0 0 -8px #c7c7c7, 60px 0 0 -8px #c7c7c7, 61px 0 0 -8px #c7c7c7, 62px 0 0 -8px #c7c7c7, 63px 0 0 -8px #c7c7c7, 64px 0 0 -8px #c7c7c7, 65px 0 0 -8px #c7c7c7, 66px 0 0 -8px #c7c7c7, 67px 0 0 -8px #c7c7c7, 68px 0 0 -8px #c7c7c7, 69px 0 0 -8px #c7c7c7, 70px 0 0 -8px #c7c7c7, 71px 0 0 -8px #c7c7c7, 72px 0 0 -8px #c7c7c7, 73px 0 0 -8px #c7c7c7, 74px 0 0 -8px #c7c7c7, 75px 0 0 -8px #c7c7c7, 76px 0 0 -8px #c7c7c7, 77px 0 0 -8px #c7c7c7, 78px 0 0 -8px #c7c7c7, 79px 0 0 -8px #c7c7c7, 80px 0 0 -8px #c7c7c7, 81px 0 0 -8px #c7c7c7, 82px 0 0 -8px #c7c7c7, 83px 0 0 -8px #c7c7c7, 84px 0 0 -8px #c7c7c7, 85px 0 0 -8px #c7c7c7, 86px 0 0 -8px #c7c7c7, 87px 0 0 -8px #c7c7c7, 88px 0 0 -8px #c7c7c7, 89px 0 0 -8px #c7c7c7, 90px 0 0 -8px #c7c7c7, 91px 0 0 -8px #c7c7c7, 92px 0 0 -8px #c7c7c7, 93px 0 0 -8px #c7c7c7, 94px 0 0 -8px #c7c7c7, 95px 0 0 -8px #c7c7c7, 96px 0 0 -8px #c7c7c7, 97px 0 0 -8px #c7c7c7, 98px 0 0 -8px #c7c7c7, 99px 0 0 -8px #c7c7c7, 100px 0 0 -8px #c7c7c7, 101px 0 0 -8px #c7c7c7, 102px 0 0 -8px #c7c7c7, 103px 0 0 -8px #c7c7c7, 104px 0 0 -8px #c7c7c7, 105px 0 0 -8px #c7c7c7, 106px 0 0 -8px #c7c7c7, 107px 0 0 -8px #c7c7c7, 108px 0 0 -8px #c7c7c7, 109px 0 0 -8px #c7c7c7, 110px 0 0 -8px #c7c7c7, 111px 0 0 -8px #c7c7c7, 112px 0 0 -8px #c7c7c7, 113px 0 0 -8px #c7c7c7, 114px 0 0 -8px #c7c7c7, 115px 0 0 -8px #c7c7c7, 116px 0 0 -8px #c7c7c7, 117px 0 0 -8px #c7c7c7, 118px 0 0 -8px #c7c7c7, 119px 0 0 -8px #c7c7c7, 120px 0 0 -8px #c7c7c7, 121px 0 0 -8px #c7c7c7, 122px 0 0 -8px #c7c7c7, 123px 0 0 -8px #c7c7c7, 124px 0 0 -8px #c7c7c7, 125px 0 0 -8px #c7c7c7, 126px 0 0 -8px #c7c7c7, 127px 0 0 -8px #c7c7c7, 128px 0 0 -8px #c7c7c7, 129px 0 0 -8px #c7c7c7, 130px 0 0 -8px #c7c7c7, 131px 0 0 -8px #c7c7c7, 132px 0 0 -8px #c7c7c7, 133px 0 0 -8px #c7c7c7, 134px 0 0 -8px #c7c7c7, 135px 0 0 -8px #c7c7c7, 136px 0 0 -8px #c7c7c7, 137px 0 0 -8px #c7c7c7, 138px 0 0 -8px #c7c7c7, 139px 0 0 -8px #c7c7c7, 140px 0 0 -8px #c7c7c7, 141px 0 0 -8px #c7c7c7, 142px 0 0 -8px #c7c7c7, 143px 0 0 -8px #c7c7c7, 144px 0 0 -8px #c7c7c7, 145px 0 0 -8px #c7c7c7, 146px 0 0 -8px #c7c7c7, 147px 0 0 -8px #c7c7c7, 148px 0 0 -8px #c7c7c7, 149px 0 0 -8px #c7c7c7, 150px 0 0 -8px #c7c7c7, 151px 0 0 -8px #c7c7c7, 152px 0 0 -8px #c7c7c7, 153px 0 0 -8px #c7c7c7, 154px 0 0 -8px #c7c7c7, 155px 0 0 -8px #c7c7c7, 156px 0 0 -8px #c7c7c7, 157px 0 0 -8px #c7c7c7, 158px 0 0 -8px #c7c7c7, 159px 0 0 -8px #c7c7c7, 160px 0 0 -8px #c7c7c7, 161px 0 0 -8px #c7c7c7, 162px 0 0 -8px #c7c7c7, 163px 0 0 -8px #c7c7c7, 164px 0 0 -8px #c7c7c7, 165px 0 0 -8px #c7c7c7, 166px 0 0 -8px #c7c7c7, 167px 0 0 -8px #c7c7c7, 168px 0 0 -8px #c7c7c7, 169px 0 0 -8px #c7c7c7, 170px 0 0 -8px #c7c7c7, 171px 0 0 -8px #c7c7c7, 172px 0 0 -8px #c7c7c7, 173px 0 0 -8px #c7c7c7, 174px 0 0 -8px #c7c7c7, 175px 0 0 -8px #c7c7c7, 176px 0 0 -8px #c7c7c7, 177px 0 0 -8px #c7c7c7, 178px 0 0 -8px #c7c7c7, 179px 0 0 -8px #c7c7c7, 180px 0 0 -8px #c7c7c7, 181px 0 0 -8px #c7c7c7, 182px 0 0 -8px #c7c7c7, 183px 0 0 -8px #c7c7c7, 184px 0 0 -8px #c7c7c7, 185px 0 0 -8px #c7c7c7, 186px 0 0 -8px #c7c7c7, 187px 0 0 -8px #c7c7c7, 188px 0 0 -8px #c7c7c7, 189px 0 0 -8px #c7c7c7, 190px 0 0 -8px #c7c7c7, 191px 0 0 -8px #c7c7c7, 192px 0 0 -8px #c7c7c7, 193px 0 0 -8px #c7c7c7, 194px 0 0 -8px #c7c7c7, 195px 0 0 -8px #c7c7c7, 196px 0 0 -8px #c7c7c7, 197px 0 0 -8px #c7c7c7, 198px 0 0 -8px #c7c7c7, 199px 0 0 -8px #c7c7c7, 200px 0 0 -8px #c7c7c7, 201px 0 0 -8px #c7c7c7, 202px 0 0 -8px #c7c7c7, 203px 0 0 -8px #c7c7c7, 204px 0 0 -8px #c7c7c7, 205px 0 0 -8px #c7c7c7, 206px 0 0 -8px #c7c7c7, 207px 0 0 -8px #c7c7c7, 208px 0 0 -8px #c7c7c7, 209px 0 0 -8px #c7c7c7, 210px 0 0 -8px #c7c7c7, 211px 0 0 -8px #c7c7c7, 212px 0 0 -8px #c7c7c7, 213px 0 0 -8px #c7c7c7, 214px 0 0 -8px #c7c7c7, 215px 0 0 -8px #c7c7c7, 216px 0 0 -8px #c7c7c7, 217px 0 0 -8px #c7c7c7, 218px 0 0 -8px #c7c7c7, 219px 0 0 -8px #c7c7c7, 220px 0 0 -8px #c7c7c7, 221px 0 0 -8px #c7c7c7, 222px 0 0 -8px #c7c7c7, 223px 0 0 -8px #c7c7c7, 224px 0 0 -8px #c7c7c7, 225px 0 0 -8px #c7c7c7, 226px 0 0 -8px #c7c7c7, 227px 0 0 -8px #c7c7c7, 228px 0 0 -8px #c7c7c7, 229px 0 0 -8px #c7c7c7, 230px 0 0 -8px #c7c7c7, 231px 0 0 -8px #c7c7c7, 232px 0 0 -8px #c7c7c7, 233px 0 0 -8px #c7c7c7, 234px 0 0 -8px #c7c7c7, 235px 0 0 -8px #c7c7c7, 236px 0 0 -8px #c7c7c7, 237px 0 0 -8px #c7c7c7, 238px 0 0 -8px #c7c7c7, 239px 0 0 -8px #c7c7c7, 240px 0 0 -8px #c7c7c7 , 241px 0 0 -8px #c7c7c7 , 242px 0 0 -8px #c7c7c7 , 243px 0 0 -8px #c7c7c7 , 244px 0 0 -8px #c7c7c7 , 245px 0 0 -8px #c7c7c7 , 246px 0 0 -8px #c7c7c7 , 247px 0 0 -8px #c7c7c7 , 249px 0 0 -8px #c7c7c7 , 250px 0 0 -8px #c7c7c7 , 251px 0 0 -8px #c7c7c7 , 253px 0 0 -8px #c7c7c7, 254px 0 0 -8px #c7c7c7, 255px 0 0 -8px #c7c7c7, 256px 0 0 -8px #c7c7c7, 257px 0 0 -8px #c7c7c7, 258px 0 0 -8px #c7c7c7, 259px 0 0 -8px #c7c7c7, 260px 0 0 -8px #c7c7c7, 261px 0 0 -8px #c7c7c7 , 263px 0 0 -8px #c7c7c7, 264px 0 0 -8px #c7c7c7, 265px 0 0 -8px #c7c7c7, 266px 0 0 -8px #c7c7c7, 267px 0 0 -8px #c7c7c7, 268px 0 0 -8px #c7c7c7, 269px 0 0 -8px #c7c7c7, 270px 0 0 -8px #c7c7c7, 271px 0 0 -8px #c7c7c7 , 273px 0 0 -8px #c7c7c7, 274px 0 0 -8px #c7c7c7, 275px 0 0 -8px #c7c7c7, 276px 0 0 -8px #c7c7c7, 277px 0 0 -8px #c7c7c7, 278px 0 0 -8px #c7c7c7, 279px 0 0 -8px #c7c7c7, 280px 0 0 -8px #c7c7c7, 281px 0 0 -8px #c7c7c7 , 283px 0 0 -8px #c7c7c7, 284px 0 0 -8px #c7c7c7, 285px 0 0 -8px #c7c7c7, 286px 0 0 -8px #c7c7c7, 287px 0 0 -8px #c7c7c7, 288px 0 0 -8px #c7c7c7, 289px 0 0 -8px #c7c7c7, 290px 0 0 -8px #c7c7c7, 291px 0 0 -8px #c7c7c7 , 293px 0 0 -8px #c7c7c7, 294px 0 0 -8px #c7c7c7, 295px 0 0 -8px #c7c7c7, 296px 0 0 -8px #c7c7c7, 297px 0 0 -8px #c7c7c7, 298px 0 0 -8px #c7c7c7, 299px 0 0 -8px #c7c7c7, 300px 0 0 -8px #c7c7c7,301px 0 0 -8px #c7c7c7,302px 0 0 -8px #c7c7c7, 303px 0 0 -8px #c7c7c7, 303px 0 0 -8px #c7c7c7, 304px 0 0 -8px #c7c7c7, 305px 0 0 -8px #c7c7c7, 306px 0 0 -8px #c7c7c7, 307px 0 0 -8px #c7c7c7, 308px 0 0 -8px #c7c7c7, 309px 0 0 -8px #c7c7c7, 310px 0 0 -8px #c7c7c7, 311px 0 0 -8px #c7c7c7, 312px 0 0 -8px #c7c7c7, 313px 0 0 -8px #c7c7c7, 313px 0 0 -8px #c7c7c7, 314px 0 0 -8px #c7c7c7, 315px 0 0 -8px #c7c7c7, 316px 0 0 -8px #c7c7c7, 317px 0 0 -8px #c7c7c7, 318px 0 0 -8px #c7c7c7, 319px 0 0 -8px #c7c7c7, 320px 0 0 -8px #c7c7c7, 321px 0 0 -8px #c7c7c7, 322px 0 0 -8px #c7c7c7, 323px 0 0 -8px #c7c7c7, 324px 0 0 -8px #c7c7c7, 325px 0 0 -8px #c7c7c7, 326px 0 0 -8px #c7c7c7, 327px 0 0 -8px #c7c7c7, 328px 0 0 -8px #c7c7c7, 329px 0 0 -8px #c7c7c7, 330px 0 0 -8px #c7c7c7, 331px 0 0 -8px #c7c7c7, 333px 0 0 -8px #c7c7c7, 333px 0 0 -8px #c7c7c7, 334px 0 0 -8px #c7c7c7, 335px 0 0 -8px #c7c7c7, 336px 0 0 -8px #c7c7c7, 337px 0 0 -8px #c7c7c7, 338px 0 0 -8px #c7c7c7, 339px 0 0 -8px #c7c7c7, 340px 0 0 -8px #c7c7c7 , 341px 0 0 -8px #c7c7c7 , 343px 0 0 -8px #c7c7c7 , 343px 0 0 -8px #c7c7c7 , 344px 0 0 -8px #c7c7c7 , 345px 0 0 -8px #c7c7c7 , 346px 0 0 -8px #c7c7c7 , 347px 0 0 -8px #c7c7c7 , 349px 0 0 -8px #c7c7c7 , 350px 0 0 -8px #c7c7c7 , 351px 0 0 -8px #c7c7c7 , 353px 0 0 -8px #c7c7c7, 354px 0 0 -8px #c7c7c7, 355px 0 0 -8px #c7c7c7, 356px 0 0 -8px #c7c7c7, 357px 0 0 -8px #c7c7c7, 358px 0 0 -8px #c7c7c7, 359px 0 0 -8px #c7c7c7, 360px 0 0 -8px #c7c7c7, 361px 0 0 -8px #c7c7c7 , 363px 0 0 -8px #c7c7c7, 364px 0 0 -8px #c7c7c7, 365px 0 0 -8px #c7c7c7, 366px 0 0 -8px #c7c7c7, 367px 0 0 -8px #c7c7c7, 368px 0 0 -8px #c7c7c7, 369px 0 0 -8px #c7c7c7, 370px 0 0 -8px #c7c7c7, 371px 0 0 -8px #c7c7c7 , 373px 0 0 -8px #c7c7c7, 374px 0 0 -8px #c7c7c7, 375px 0 0 -8px #c7c7c7, 376px 0 0 -8px #c7c7c7, 377px 0 0 -8px #c7c7c7, 378px 0 0 -8px #c7c7c7, 379px 0 0 -8px #c7c7c7, 380px 0 0 -8px #c7c7c7, 381px 0 0 -8px #c7c7c7 , 383px 0 0 -8px #c7c7c7, 384px 0 0 -8px #c7c7c7, 385px 0 0 -8px #c7c7c7, 386px 0 0 -8px #c7c7c7, 387px 0 0 -8px #c7c7c7, 388px 0 0 -8px #c7c7c7, 389px 0 0 -8px #c7c7c7, 390px 0 0 -8px #c7c7c7, 391px 0 0 -8px #c7c7c7 , 393px 0 0 -8px #c7c7c7, 394px 0 0 -8px #c7c7c7, 395px 0 0 -8px #c7c7c7, 396px 0 0 -8px #c7c7c7, 397px 0 0 -8px #c7c7c7, 398px 0 0 -8px #c7c7c7, 399px 0 0 -8px #c7c7c7, 400px 0 0 -8px #c7c7c7;
  margin-top: -8px;
  border: 1px solid #777;
}

input::-moz-range-track {
  width: 400px;
  height: 2px;
}

input::-moz-range-thumb {
  height: 25px;
  width: 25px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #777;
  position: relative;
}

input::-moz-range-progress {
  height: 2px;
  background: #e33d44;
  border: 0;
  margin-top: 0;
}

input::-ms-track {
  background: transparent;
  border: 0;
  border-color: transparent;
  border-radius: 0;
  border-width: 0;
  color: transparent;
  height: 2px;
  margin-top: 10px;
  width: 240px;
}

input::-ms-thumb {
  height: 18px;
  width: 28px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #777;
}

input::-ms-fill-lower {
  background: #e33d44;
  border-radius: 0;
}

input::-ms-fill-upper {
  background: #c7c7c7;
  border-radius: 0;
}

input::-ms-tooltip {
  display: none;
}



`;
export default class Slider extends React.Component {
  state = {
    value: this.props.value,
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.callBackFromParent(e.target.value)
  };

  

  render() {
    return (
      <div data={this.state}>
        
        <Styles min={this.props.min} max={this.props.max} value={this.state.value}>
          <div>
          <div className="value_class">{this.state.value} {this.props.unit}</div>
          <input
            type="range"
            min={this.props.min}
            max={this.props.max}
            value={this.state.value}
            onChange={this.handleOnChange}
            className="slider"
            step={this.props.step}
          />
         
          <div className="input_range_text">
            <div className="left_text">{this.props.left_text}</div>
            <div className="right_text">{this.props.right_text}</div>
          </div>
          </div>
         
          <div className="text_input_parent">
             <div className="slider_label_parent">
              <label className="slider_label_text">{this.props.text}</label>
             </div>
             <div className="a">
             <input className="input_text_slider" type="number" min="50" max="500" value={this.state.value}  onChange={this.handleOnChange}/>
             <span className="unit_input">{this.props.unit}</span>
             </div>
          </div>
          
        </Styles>
       
      </div>
    );
  }
}
