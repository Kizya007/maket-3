import Eye from "../assets/Icon/Eye"
import Scales from "../assets/Icon/Scales"
import ShoppingCart from "../assets/Icon/ShoppingCart"
import Heart from "../assets/Icon/Heart"
import "../assets/Userbar.scss"



function UserBar() {
    return (
        <div className="userbar container">
            <div className="userbar-list">
                <Eye />
                <span className="userbar-list__text">
                    Промотренные
                </span>
                <div className="userbar-list__number">
                    0
                </div>
                <div className="userbar-list__line">

                </div>
            </div>
            <div className="userbar-list">
                <Scales />
                <span className="userbar-list__text">
                    Сравнение товаров
                </span>
                <div className="userbar-list__number">
                    0
                </div>
                <div className="userbar-list__line">

                </div>
            </div>
            <div className="userbar-list">
                <ShoppingCart />
                <span className="userbar-list__text">
                    Избранное
                </span>
                <div className="userbar-list__number">
                    0
                </div>
                <div className="userbar-list__line">

                </div>
            </div>
            <div className="userbar-list">
                <Heart />
                <span className="userbar-list__text">
                    Корзина
                </span>
                <div className="userbar-list__number">
                    7
                </div>
            </div>
        </div>
    )
}
export default UserBar