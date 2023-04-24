import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "../service/service.module.css";
import images from "../../assests/images/images";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Service = () => {
  const tabArray = [
    {
      img: images.EtimadLogo,
      img2: images.Gov,
      content:
        "نقدم العديد من الخدمات للجهات الحكومية التي تهدف إلى تسهيل الإجراءات التشغيلية و توثيق التعاملات المالية لدى الجهات الحكومية، مع توفير أدوات لقياس مستوى الخدمة والتي تهدف إلى رفع كفاءة أداء الخدمات",
    },
    {
      img: images.Bussiness,
      img2: images.Gov,
      content:
        "قدم العديد من الخدمات للقطاع الخاص التي تهدف إلى رفع نسبة المشاركة في المنافسات والمشتريات الحكومية، وزيادة دور المحتوى المحلي في التنمية الاقتصادية ورفع مساهمة المنشآت الصغيرة والمتوسطة.",
    },
    {
      img: images.Individuals,
      img2: images.Gov,
      content:
        "تقدم العديد من الخدمات للأفراد، والتي تمكن موظفي الجهات الحكومية من إدارة التعاملات المرتبطة بالموارد البشرية بسهولة وبكفاءة عالية، بالإضافة إلى خدمات أخرى تمكّن أصحاب الأعمال الحرة من المشاركة في المنافسات والمشتريات الحكومية ومتابعة المطالبات المالية بكل سهولة",
    },
  ];

  return (
    <div className={classes.Service}>
      <div className="container">
        <h4 className={classes.Service__heading}>الخدمات الإلكترونية</h4>
        <Tabs>
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
              <div className=" p-0 border-0">
                <TabList>
                  {tabArray.map((tab, index) => (
                    <Tab key={index} className={classes.tablist_li}>
                      <div className={classes.tabs_li}>
                        <img src={tab.img} alt={tab.alt} />
                        <AiOutlineArrowLeft className={classes.arrow} />
                      </div>
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>
            <div className="col-12 col-lg-8 col-md-6">
              {tabArray.map((tab, index) => (
                <TabPanel key={index}>
                  <div className={classes.TabsConten}>
                    <div>
                      <img src={tab.img2} alt={tab.alt} />
                    </div>
                    <p>{tab.content}</p>
                    <button>تسجيل الدخول</button>
                  </div>
                </TabPanel>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Service;
