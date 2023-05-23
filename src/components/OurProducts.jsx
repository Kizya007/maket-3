import Binocular from "../assets/Icon/BinocularIcon"
import Microscope from "../assets/Icon/MicroscopeIcon"
import Telescope from "../assets/Icon/TelescopeIcon"
import Latern from "../assets/Icon/LanternIcon"
import SpyGlass from "../assets/Icon/SpyGlassIcon"
import Loupe from "../assets/Icon/LoupeIcon"
import Target from "../assets/Icon/TargetIcon"
import NightEyse from "../assets/Icon/NightEyse"
import ThermalVisions from "../assets/Icon/ThermalVision"
import "../assets/Products.scss"

function OurProducts() {
    return (
        <div className="products container">
            <span className="products-title">Наши товары</span>

            {/* ul(cards)>li(card)>img(card)> ul(card-list)>a(card-list__link) */}
            <div className="products-cards">
                <div className="products-list">
                    <div className="products-list__icon" >
                        <Binocular />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <Microscope />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <Telescope />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <Latern />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <SpyGlass />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <Loupe />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <Target />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <NightEyse />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
                <div className="products-list">
                    <div className="products-list__icon" >
                        <ThermalVisions />
                    </div>
                    <div className="products-list__item">
                        <ul>
                            <li>Бинокли</li>
                            <li className="products-list__number"><a href=""> Армейско-полевой</a>(58)</li>
                            <li className="products-list__number"><a href=""> Астрономический</a>(35)</li>
                            <li className="products-list__number"><a href=""> Для города</a>(49)</li>
                            <li className="products-list__number"><a href=""> Для детей</a>(54)</li>
                            <li className="products-list__number"><a href=""> Для охоты и рыбалки</a>(63)</li>
                            <li className="products-list__number"> <a href=""> Любительский</a>(32)</li>
                            <li className="products-list__number"><a href="">Для профессионалов</a>(19)</li>
                            <button className="products-list__btn">Показать все <div className="btn-circle"><div className="btn-circle__item"></div><div className="btn-circle__item"></div><div className="btn-circle__item"></div></div></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default OurProducts