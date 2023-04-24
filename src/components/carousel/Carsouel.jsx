import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from '../carousel/carsouel.module.css'
import Slider from "react-slick";
import images from "../../assests/images/images";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={classes.ArrowLeft}
            onClick={onClick}
        ><AiOutlineArrowRight /></div>
    );
}
const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={classes.ArrowRight}
            onClick={onClick}
        >      <AiOutlineArrowLeft /></div>
    );
}

const Carsouel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div className={[classes.carsouelMain]}>
            <Slider {...settings} id="Slider">
                <div className="d-flex">

                    <div className={classes.sliderContent}>
                        <div className={classes.slidertitle}>
                            <span>صفر 04, 1443</span>
                            <h3>سوق اعتماد</h3>

                        </div>
                        <p>يتيح حركة تعاملات مفتوحة بين الجهات الحكومية والقطاع الخاص حيث يتيح للجهات الحكومية سهولة شراء السلع والخدمات بشكل إلكتروني، وتوفير سلسلة كاملة من دورة الشراء إلى توصيل والاستلام والدفع... </p>

                    </div>
                    <div className={classes.imgSliderDiv}>
                        <img src={images.MicrosoftTeams} alt="sliderimg" />

                    </div>
                </div>
                <div className="d-flex">

                    <div className={classes.sliderContent}>
                        <div className={classes.slidertitle}>
                            <span> صفر 04, 1443</span>
                            <h3> منافسات اعتماد</h3>

                        </div>
                        <p>
                            يمكنك استعراض كافة المنافسات الحكومية المطروحة من خلال الضغط على (استعراض المنافسات) في القائمة الرئيسية
                        </p>

                    </div>
                    <div className={classes.imgSliderDiv}>
                        <img src={images.Etimadtender} alt="sliderimg" />

                    </div>
                </div>
                <div className="d-flex">

                    <div className={classes.sliderContent}>
                        <div className={classes.slidertitle}>
                            <span>  شعبان 03, 1443 </span>
                            <h3>  خدمة الضمان البنكي</h3>

                        </div>
                        <p>

                            يمكنك إصدار الضمان البنكي عبر الدخول لمنصة اعتماد إلكترونياً

                        </p>

                    </div>
                    <div className={classes.imgSliderDiv}>
                        <img src={images.EtimadSouq} alt="sliderimg" />

                    </div>
                </div>
            </Slider>

        </div>
    );

}



export default Carsouel;