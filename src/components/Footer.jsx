import "../assets/Footer.scss"
import Group from "../assets/img/Group.png"
import PointIcon from '../assets/Icon/Point'
import Clock from "../assets/Icon/ClockIcon"
import MailIcon from '../assets/Icon/Mail'
import StarRating from "../assets/Icon/StarRating"
import yandex from "../assets/img/yandex.png"
import Money from "../assets/Icon/money"
import Visa from "../assets/Icon/Visa"
import Maestro from "../assets/Icon/Maestro"
import MasterCard from "../assets/Icon/MasterCard"
import Peace from "../assets/img/Peace.png"
import Sber from "../assets/img/Sber.png"
import Ypay from "../assets/img/Ypay.png"
import Vk from "../assets/Icon/Vk"
import Telegram from "../assets/Icon/Telegram"
import WhatsUp from "../assets/Icon/WhatsUp"
import Viber from "../assets/Icon/Viber"



function Footer() {
    return (
        <div className="footer container">
            <div className="footer-block">
                <div className="footer-block__information">
                    <div className="footer-block__img">
                        <img src={Group} />
                    </div>
                    <div className="footer-block__text">
                        <PointIcon /> <span>Россия, г. Москва,
                            ул. Никольская, д. 15</span>
                    </div>
                    <div className="footer-block__text">
                        <Clock /> <span> Пн-Пт с 09:00-19:00,
                            Сб-Вс - выходной</span>
                    </div>
                    <div className="footer-block__link">
                        <MailIcon /> <a href="">sales@tele-optics.ru</a>
                    </div>
                </div>
                <div className="block-rating">
                    <span className="block-rating__text">Рейтинг магазина</span>
                    <div className="block-rating__img">
                        <div className="block-rating__star">
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRating />
                        </div>
                        <img src={yandex} />
                    </div>
                </div>
            </div>
            <ul className="catalog">
                <span className="catalog-title">Каталог</span>
                <li>Бинокли</li>
                <li>Телескопы</li>
                <li>Монокуляры</li>
                <li>Лупы</li>
                <li>Микроскопы</li>
                <li>Зрительные трубы</li>
                <li>Дальномеры</li>
                <li>Тепловизоры</li>
                <li>Приборы ночного видения</li>
            </ul>
            <ul className="sup-information">
                <span className="sup-information__title">Полезная информация</span>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Возврат</li>
                <li>Производители</li>
                <li>Гарантия</li>
                <li>Статьи</li>
                <div className="block-pay">
                    <span className="block-pay__title">
                        Способ оплаты:
                    </span>
                    <div block-pay__img>
                        <Money />
                        <Visa />
                        <MasterCard />
                        <Maestro />
                    </div>
                    <div>
                        <img src={Peace} />
                        <img src={Sber} />
                        <img src={Ypay} />
                    </div>
                </div>
            </ul>
            <ul className="contacts">
                <span className="contacts-title">
                    Контакты
                </span>
                <div className="contacts-block">
                    <span className="contacts-block__number">
                        +7 495 215 0744
                    </span>
                    <ul className="contacts-block__img">
                        <li>
                            <Vk />
                        </li>
                        <li>
                            <Telegram />
                        </li>
                        <li>
                            <Viber />
                        </li>
                        <li>
                            <WhatsUp />
                        </li>
                    </ul>
                    <ul className="contacts-block__text">
                        <li>О нас</li>
                        <li>Оптовые продажи</li>
                        <li>Личный кабинет</li>
                    </ul>
                </div>
                <div className="contacts-block__link">
                    <a className="contacts-block__subscription">
                        Подписаться на новости
                    </a>
                    <a className="contacts-block__download">Скачать прайс-лист</a>
                </div>
            </ul>
        </div >
    )
}
export default Footer