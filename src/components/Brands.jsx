import "../assets/Brands.scss"
import Seeland from "../assets/img/Seeland.png"
import Celestron from "../assets/img/Celestron.png"
import Allen from "../assets/img/Allen.png"
import Olympus from "../assets/img/Olympus.png"
import Bresser from "../assets/img/Bresser.png"


function Brands() {
    return (
        <div className="brands">
            <div className="brands__header">
                <span className="brands__header__title">
                    Бренды
                </span>
                <span className="brands__header__subtitle">
                    Все бренды
                </span>
            </div>
            <div className="brands__list">
                <div className="brands__list__item">
                    <img src={Seeland} />
                </div>
                <div className="brands__list__item">
                    <img src={Celestron} />
                </div>
                <div className="brands__list__item">
                    <img src={Allen} />
                </div>
                <div className="brands__list__item">
                    <img src={Olympus} />
                </div>
                <div className="brands__list__item">
                    <img src={Bresser} />
                </div>
            </div>
        </div>
    )
}
export default Brands