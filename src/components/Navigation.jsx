import Group from '../assets/img/Group.png'
import Search from '../assets/Icon/Search'
import Eye from '../assets/Icon/Eye'
import Scales from '../assets/Icon/Scales'
import Heart from '../assets/Icon/Heart'
import ShoppingCart from '../assets/Icon/ShoppingCart'
import "../assets/Navigation.scss"

function Navigation() {
  return (
    <div className="navigation container">
      <img src={Group} className="navigation-logo" />
      <div className="navigation-input__wrap">
        <input
          type="text"
          value={'Введите название: Бинокль армейский'}
          className="navigation-input"
        />
        <div className='navigation-input__search'>
          <Search />
        </div>
      </div>
      <ul>
        <li>
          <a href="">
            <Eye />
          </a>
        </li>
        <li>
          <a href="">
            <Scales />
          </a>
        </li>
        <li>
          <a href="">
            <Heart />
          </a>
        </li>
        <li>
          <a href="">
            <ShoppingCart />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
