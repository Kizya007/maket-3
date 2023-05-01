import Point from "../assets/Icon/Point"
import Telegram from "../assets/Icon/Telegram"
import Viber from "../assets/Icon/Viber"
import WhatsUp from "../assets/Icon/WhatsUp"
import Mail from "../assets/Icon/Mail"
import User from "../assets/Icon/User"
import Group from "../assets/img/Group.png"
import Search from "../assets/Icon/Search"
import Eye from "../assets/Icon/Eye"
import Scales from "../assets/Icon/Scales"
import Heart from "../assets/Icon/Heart"
import ShoppingCart from "../assets/Icon/ShoppingCart"
import ArrowDown from "../assets/Icon/ArrowDown"
import "../assets/Header.scss"



function Header() {
    return (
        <header>
            <div className="header__up">
                <div className="point">
                    <Point />
                    <span className="header__city">
                        Калининград
                    </span>
                </div>
                <div className="navigation">
                    <ul className="navigation__list">
                        <li>
                            О компании
                        </li>
                        <li>
                            Доставка
                        </li>
                        <li>
                            Оплата
                        </li>
                        <li>
                            Акции
                        </li>
                        <li>
                            Распродажа
                        </li>
                    </ul>
                </div>
                <div className="header__message">
                    <Telegram />
                    <Viber />
                    <WhatsUp />
                    <span>
                        +7 495 215 0744
                    </span>
                </div>
                <div className="header__mail">
                    <Mail />
                    <span>
                        sales@tele-optics.ru
                    </span>
                </div>
                <div className="header__entry">
                    <User />
                    <span>
                        Вход / Регистрация
                    </span>
                </div>
            </div>
            <div className="header__input">
                <img src={Group} className="header__input__img" />
                <div className="header__input__add" >
                    <input type="text" value={"Введите название: Бинокль армейский"} className="header__input__box"  />
                    <Search />
                </div>
                <div>
                    <ul>
                        <li><Eye /></li>
                        <li><Scales /></li>
                        <li><Heart /></li>
                        <li><ShoppingCart /></li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>Телескопы</li>
                    <li>Бинокли</li>
                    <li>Лупы</li>
                    <li>Микроскопы</li>
                    <li>Зрительные трубы</li>
                    <li>Монокуляры</li>
                    <li>Прицелы</li>
                    <li>Дальномеры</li>
                    <li>Тепловизоры</li>
                    <li>Еще <ArrowDown /></li>
                </ul>
            </div>
        </header>
    )
}
export default Header