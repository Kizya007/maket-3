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
        <a href="">О компании</a>
        <a href="">Доставка</a>
        <a href="">Оплата</a>
        <a href="">Акции</a>
        <a href="">Распродажа</a>
      </nav>
      <ul className='header-messenger'>
        <li className='header-messenger__icon'><TelegramIcon /></li>
        <li className='header-messenger__icon'><ViberIcon /></li>
        <li className='header-messenger__icon'> <WhatsUpIcon /></li>
        <li className='header-messenger__phone'>+7 495 215 0744</li>
      </ul>
      <div className="header-mail">
        <MailIcon />
        <span className='header-mail__info'>sales@tele-optics.ru</span>
      </div>
      <div className="header-authorization">
        <UserIcon />
        <button className='header-authorization__btn'>Вход</button>
        <span>/</span>
        <button className='header-authorization__btn'>Регистрация</button>
      </div>
    </header>
  )
}
export default Header
