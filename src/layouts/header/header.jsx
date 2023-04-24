import React, { Fragment, useState, useRef } from "react";
import classes from "./header.module.css";
import images from "../../assests/images/images";
import { BiSearch } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [inputDiv, setInputDiv] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subUl, setSubUl] = useState(false);
  const nodeRef = useRef(null);

  return (
    <Fragment>
      {!inputDiv && (
        <header className={[classes.mainHeader, classes.headerPortal]}>
          <div className="container-fluid">
            <div className="row">
              <div className={`col-12 ${classes.header}`}>
                <div className={classes.headerNavigation}>
                  <a className={classes.navbarBrand} href="/">
                    <img
                      src={images.logo}
                      className="d-none d-sm-block "
                      alt="logoImg"
                    />
                    <img
                      src={images.LogoSmall}
                      className="d-block d-sm-none "
                      style={{ width: "50px" }}
                      alt="logosmall"
                    />
                  </a>
                  <button
                    className={`d-block d-lg-none ${classes.btnGhost}`}
                    onClick={() => setSubMenu(!subMenu)}
                  >
                    {!subMenu ? (
                      <GiHamburgerMenu style={{ fontSize: "16px" }} />
                    ) : (
                      <AiOutlineClose style={{ fontSize: "16px" }} />
                    )}
                  </button>
                  <div className={`d-none d-lg-block ${classes.mainNav}`}>
                    <ul>
                      <li>
                        <a href="#" className={classes.beforetraingle}>
                          <span className={classes.dropdownIicon}>
                            عن أعتماد
                          </span>
                        </a>
                        <ul className={classes.submenu}>
                          <div>
                            <li>
                              <a href="#">من نحن</a>{" "}
                            </li>
                            <li>
                              <a href="#"> السياسات و الاستراتجيات</a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a href="#">تواصل معنا</a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">الاخبار والفعاليات</a>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span>الخدمات الالكترونية</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>المشاركة الالكترونية</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={classes.dropdownIicon}>
                            {" "}
                            البوابة الارشادية
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.headerLoginWrapper}>
                  <ul className={classes.headerLoginWrapperUl}>
                    <li>
                      <span>En</span>
                    </li>
                    <li>
                      <button className={classes.btnGhost}>
                        <BiSearch
                          onClick={() => setInputDiv(!inputDiv)}
                        ></BiSearch>
                      </button>
                    </li>
                    <li>
                      <div></div>
                      <button className={classes.BtnLogin}>
                        <BsFillPersonFill className="d-block d-sm-none " />
                        <span className="d-none d-sm-block">تسجيل الدخول</span>
                        <BsChevronDown
                          className={`d-none d-sm-block ${classes.arrowDown}`}
                        ></BsChevronDown>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* nav on small devices */}

              <CSSTransition
                in={subMenu}
                timeout={100}
                classNames={`${classes.headerSmall} fade`}
                nodeRef={nodeRef}
                unmountOnExit
              >
                <div className={classes.headerSmall} ref={nodeRef}>
                  <nav>
                    <ul>
                      <li
                        className={classes.subMenu}
                        onClick={() => setSubUl(!subUl)}
                      >
                        <a>
                          {" "}
                          عن اعتماد{" "}
                          <AiFillCaretDown
                            style={{
                              transform: !subUl
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                            }}
                          />{" "}
                        </a>
                        {subUl && (
                          <ul>
                            <li>
                              {" "}
                              <a> من نحن </a>
                            </li>
                            <li>
                              <a>السياسات و الاستراتيجيات</a>
                            </li>
                            <li>
                              {" "}
                              <a>تواصل معنا</a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a> الأخبار والفعاليات</a>
                            </li>

                            <li>
                              <a>عن اعتماد</a>{" "}
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <a>الخدمات الإلكترونية </a>
                      </li>
                      <li>
                        <a> المشاركة الإلكترونية</a>
                      </li>
                      <li>
                        <a> البوابة الإرشادية </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </CSSTransition>
            </div>
          </div>
        </header>
      )}
      {inputDiv && (
        <div
          className={classes.searchContainer}
          style={{ opacity: inputDiv ? 1 : 0, transition: "opacity 2s ease" }}
        >
          <img src={images.LogoSmall} className={classes.imgLogoSearch} />
          <div className={classes.searchDiv}>
            <input type="text" placeholder="بحث" />
            <BiSearch />
          </div>
          <button
            type="button"
            className={classes.btnGhost}
            onClick={() => setInputDiv(!inputDiv)}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
