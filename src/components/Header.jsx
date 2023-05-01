import PointIcon from '../assets/Icon/Point'
import Telegram from '../assets/Icon/Telegram'
import Viber from '../assets/Icon/Viber'
import WhatsUp from '../assets/Icon/WhatsUp'
import Mail from '../assets/Icon/Mail'
import User from '../assets/Icon/User'
import ArrowDown from '../assets/Icon/ArrowDown'
import '../assets/Header.scss'

function Header() {
  return (
    <header className='header' >
        {/* обертка лишния удалить и перенести класс на сам header */}
      <div className="header__up">
        {/* point = location */}
        <div className="point">
          <PointIcon />
          {/* location-city */}
          <span className="header__city">Калининград</span>
        </div>
        <nav className="navigation">
          <li>О компании</li>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Акции</li>
          <li>Распродажа</li>
        </nav>
        {/* messenger class */}
        {/* ul>li>item */}
        <div className="header__message">
          <Telegram />
          <Viber />
          <WhatsUp />
        </div>
        {/* header-contacts */}
        <span>+7 495 215 0744</span>
        <div className="header__mail">
          <Mail />
          <span>sales@tele-optics.ru</span>
        </div>
         {/*header-authorization */}
        <div className="header__entry">
          <User />
          <button>Вход</button>
          <span>/</span>
          <button>Регистрация</button>
        </div>
      </div>
    </header>
  )
}
export default Header
