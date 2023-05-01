import Group from '../assets/img/Group.png'
import Search from '../assets/Icon/Search'
import Eye from '../assets/Icon/Eye'
import Scales from '../assets/Icon/Scales'
import Heart from '../assets/Icon/Heart'
import ShoppingCart from '../assets/Icon/ShoppingCart'

function Navigation() {
  return (
    <div className="navigation">
      <img src={Group} className="navigation-logo" />
      <div className="navigation__input-wrap">
        <input
          type="text"
          value={'Введите название: Бинокль армейский'}
          className="navigation__input"
        />
        <Search />
      </div>
      <ul>
        {/* добавить обертку a -ссылку для иконок */}
        <li>
          <a href="">
            <Eye />
          </a>
        </li>
        <li>
          <Scales />
        </li>
        <li>
          <Heart />
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </div>
  )
}

export default Navigation
