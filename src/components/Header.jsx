import PointIcon from '../assets/Icon/Point'
import TelegramIcon from '../assets/Icon/Telegram'
import ViberIcon from '../assets/Icon/Viber'
import WhatsUpIcon from '../assets/Icon/WhatsUp'
import MailIcon from '../assets/Icon/Mail'
import UserIcon from '../assets/Icon/User'
import ArrowDown from '../assets/Icon/ArrowDown'
import '../assets/Header.scss'

function Header() {
  return (
    <header className='header' >
      <div className="header-location">
        <PointIcon />
        <span className="header-location__city">Калининград</span>
      </div>
      <nav className="header-navigation">
        <li>О компании</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>Акции</li>
        <li>Распродажа</li>
      </nav>
      <ul className='header-messenger'>
        <li><TelegramIcon /></li>
        <li><ViberIcon /></li>
        <li> <WhatsUpIcon /></li>
      </ul>
      {/* header-contacts */}
      <span>+7 495 215 0744</span>
      <div className="header-mail">
        <MailIcon />
        <span>sales@tele-optics.ru</span>
      </div>
      <div className="header-authorization">
        <UserIcon />
        <button>Вход</button>
        <span>/</span>
        <button>Регистрация</button>
      </div>

    </header>
  )
}
export default Header
