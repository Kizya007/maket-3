import "../assets/Banner.scss"
import Pricel from "../assets/img/Pricel.png"
import Pricel2 from "../assets/img/Pricel2.png"
import ArrowRight from "../assets/Icon/ArrowRight"
import ArrowLeft from "../assets/Icon/ArrowLeft"
import ArrowRightt from "../assets/Icon/ArrowRightt"

function Banner() {
    return (
        <div className="banner slider">
            <div className="banner__slide">
                <div className="banner__slide__img">
                    <img src={Pricel} />
                </div>
                <a href="" className="banner__slide__btn">Подробнее <ArrowRight /></a>
                <button className="slide-prev">
                    <ArrowLeft />
                </button>
                <button className="slide-next">
                    <ArrowRightt />
                </button>
                {/* div = ul */}
                <div className="navigation-dots">
                    <div className="dot" >
                    </div>
                    <div className="dot" >
                    </div>
                    <div className="dot" >
                    </div>
                    <div className="dot" >
                    </div>
                    <div className="dot" >
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner