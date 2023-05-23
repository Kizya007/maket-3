import "../assets/Item.scss"
import Binocular2 from "../assets/img/Binocular2.png"
import Confirm from "../assets/Icon/Confirm"
import Star from "../assets/Icon/Star"
import EmptyStar from "../assets/Icon/EmptyStar"
import Cart from "../assets/Icon/Cart"
import ArrowRight from "../assets/Icon/ArrowRightt"
import ArrowLeft from "../assets/Icon/ArrowLeft"


function Item() {
    return (
        <div className="item">
            <div className="header">
                <ul className="header-nav">
                    <li className="header-nav__list">Рекомендуемые</li>
                    <li className="header-nav__list">Новинки</li>
                    <li className="header-nav__list">Самые просматриваемые</li>
                    <li className="header-nav__list">Скидки</li>
                </ul>
                <a href="" className="header-catalog">
                    Смотреть весь каталог
                </a>
            </div>
            <div className="item-list">
                <button className="item__list--btn__right">
                    <ArrowRight />
                </button>
                <button className="item__list--btn__left">
                    <ArrowLeft />
                </button>
                <div className="bestseller__list">
                    <div className="bestseller__list__item">
                        <span className="bestseller__list__title">
                            <Confirm /> В наличии
                        </span>
                        <div className="bestseller__item">
                            <div className="bestseller__item__img">
                                <img src={Binocular2} />
                            </div>
                            <div className="bestseller__item__slide">
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bestseller__item__down">
                        <span className="bestseller__item__name">
                            Бинокль БПЦ2 10х40 (обрезин., рубин)
                        </span>
                        <div className="bestseller__item__rating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <EmptyStar />
                            <span className="bestseller__item__ratingg">
                                4.67 (12 отзывов)
                            </span>
                        </div>
                        <div className="bestseller__item__price">
                            <span className="bestseller__item__pricee">
                                10 190 ₽
                            </span>
                            <span className="bestseller__item__priceee">
                                12 450 ₽
                            </span>
                            <button className="bestseller__item__btn">
                                <Cart />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bestseller__list">
                    <div className="bestseller__list__item">
                        <span className="bestseller__list__title">
                            <Confirm /> В наличии
                        </span>
                        <div className="bestseller__item">
                            <div className="bestseller__item__img">
                                <img src={Binocular2} />
                            </div>
                            <div className="bestseller__item__slide">
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bestseller__item__down">
                        <span className="bestseller__item__name">
                            Бинокль БПЦ2 10х40 (обрезин., рубин)
                        </span>
                        <div className="bestseller__item__rating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <EmptyStar />
                            <span className="bestseller__item__ratingg">
                                4.67 (12 отзывов)
                            </span>
                        </div>
                        <div className="bestseller__item__price">
                            <span className="bestseller__item__pricee">
                                10 190 ₽
                            </span>
                            <span className="bestseller__item__priceee">
                                12 450 ₽
                            </span>
                            <button className="bestseller__item__btn">
                                <Cart />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bestseller__list">
                    <div className="bestseller__list__item">
                        <span className="bestseller__list__title">
                            <Confirm /> В наличии
                        </span>
                        <div className="bestseller__item">
                            <div className="bestseller__item__img">
                                <img src={Binocular2} />
                            </div>
                            <div className="bestseller__item__slide">
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bestseller__item__down">
                        <span className="bestseller__item__name">
                            Бинокль БПЦ2 10х40 (обрезин., рубин)
                        </span>
                        <div className="bestseller__item__rating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <EmptyStar />
                            <span className="bestseller__item__ratingg">
                                4.67 (12 отзывов)
                            </span>
                        </div>
                        <div className="bestseller__item__price">
                            <span className="bestseller__item__pricee">
                                10 190 ₽
                            </span>
                            <span className="bestseller__item__priceee">
                                12 450 ₽
                            </span>
                            <button className="bestseller__item__btn">
                                <Cart />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bestseller__list">
                    <div className="bestseller__list__item">
                        <span className="bestseller__list__title">
                            <Confirm /> В наличии
                        </span>
                        <div className="bestseller__item">
                            <div className="bestseller__item__img">
                                <img src={Binocular2} />
                            </div>
                            <div className="bestseller__item__slide">
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                                <div className="bestseller__item__block">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bestseller__item__down">
                        <span className="bestseller__item__name">
                            Бинокль БПЦ2 10х40 (обрезин., рубин)
                        </span>
                        <div className="bestseller__item__rating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <EmptyStar />
                            <span className="bestseller__item__ratingg">
                                4.67 (12 отзывов)
                            </span>
                        </div>
                        <div className="bestseller__item__price">
                            <span className="bestseller__item__pricee">
                                10 190 ₽
                            </span>
                            <span className="bestseller__item__priceee">
                                12 450 ₽
                            </span>
                            <button className="bestseller__item__btn">
                                <Cart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bestseller__slide__list">
                <div className="bestseller__slide__lchange" >
                </div>
                <div className="bestseller__slide__lchange" >
                </div>
                <div className="bestseller__slide__lchange" >
                </div>
                <div className="bestseller__slide__lchange" >
                </div>
                <div className="bestseller__slide__lchange" >
                </div>
            </div>
        </div>
    )
}
export default Item