import React from "react";
import classes from "./financial.module.css";
import images from "../../assests/images/images";
import Carsouel from "../carousel/Carsouel";

const Financial = () => {
  return (
    <div className={classes.finanicalSection}  style={{ backgroundImage: `url(${images.BackgroudImg})` }}>
      <div className={classes.finanicalSection__div}>
        <div className="container">
          <div className="row">
            <div
              className={`col-12 col-md-12 col-lg-7 ${classes.justify_content_center}`}
            >
              <div className={classes.moneyService}>
                <h2 className={classes.moneyService__heading}>
                  منصة الخدمات المالية
                </h2>
                <div className={classes.moneyService__div}>
                  <button>
                    <svg
                      className={classes.playSVG}
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <g
                        id="Group_4268"
                        data-name="Group 4268"
                        transform="translate(-98 -405)"
                      >
                        <g
                          id="Ellipse_312"
                          data-name="Ellipse 312"
                          transform="translate(98 405)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        >
                          <circle cx="16" cy="16" r="16" stroke="none"></circle>
                          <circle cx="16" cy="16" r="15" fill="none"></circle>
                        </g>
                        <path
                          id="Polygon_5"
                          data-name="Polygon 5"
                          d="M5,0l5,8H0Z"
                          transform="translate(119 416) rotate(90)"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                    عن اعتماد
                  </button>
                  <span className={classes.lineSvg}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.724"
                      height="50.619"
                      viewBox="0 0 8.724 50.619"
                    >
                      <path
                        id="Path_4415"
                        data-name="Path 4415"
                        d="M619.495,277.956a9.646,9.646,0,0,0-2.227,13.244c1.041,1.509,2.49,2.694,3.6,4.154a11.848,11.848,0,0,1,.162,13.72c-1.082,1.5-2.512,2.717-3.579,4.224a11.051,11.051,0,0,0,1.529,14.507"
                        transform="translate(-614.913 -277.553)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1"
                      ></path>
                    </svg>
                  </span>
                  <span>مرر للأسفل لمعرفة المزيد</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <img
                src={images.splashImg}
                className={classes.spalshImg}
                alt="spalshImg"
              />
            </div>
            <div className="col-12">
              <div className={classes.services__contaniner}>
                <div className="row justify-content-end">
                  <div className="col-12 col-md-12 col-lg-7 justify-content-center d-flex">
                    <Carsouel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Financial;
