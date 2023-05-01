import "../assets/Banner.scss"
import Pricel from "../assets/img/Pricel.png"
import Pricel2 from "../assets/img/Pricel2.png"
import ArrowRight from "../assets/Icon/ArrowRight"
import ArrowLeft from "../assets/Icon/ArrowLeft"
import ArrowRightt from "../assets/Icon/ArrowRightt"

function Banner() {
    return (
        <div className="banner">
            <div className="banner__slide">
                <div className="banner__slide__img">
                    <img src={Pricel} />
                </div>
                <div className="banner__slide__img">
                    <img src={Pricel2} />
                </div>
                <button className="banner__slide__btn">
                    Подробнее
                    <ArrowRight />
                </button>
                <button className="banner__slide__arrowleft">
                    <ArrowLeft />
                </button>
                <button className="banner__slide__arrowright">
                    <ArrowRightt />
                </button>
                <div className="banner__slide__list">
                    <div className="banner__slide__lchange" >
                    </div>
                    <div className="banner__slide__lchange" >
                    </div>
                    <div className="banner__slide__lchange" >
                    </div>
                    <div className="banner__slide__lchange" >
                    </div>
                    <div className="banner__slide__lchange" >
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner