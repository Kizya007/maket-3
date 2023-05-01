import Binocular from "../assets/img/Binocular.png"
import "../assets/Category.scss"

function Category() {
    return (
        <div className="categories">
            <div className="categories__title">
                <span className="categories__title">
                    Популярные категории
                </span>
                <span className="categories__link">
                    Перейти в каталог
                </span>
            </div>
            <ul className="categories__list">
                <li className="category">
                    <img src={Binocular}  className="category__img"/>
                    <span className="category__name">
                        Бинокли
                    </span>
                    <span className="category__count">
                        35 товаров
                    </span>
                </li>
                <div className="category">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
                <div className="category__list__item">
                    <img src={Binocular} />
                    <span>
                        Бинокли
                    </span>
                    <span>
                        35 товаров
                    </span>
                </div>
            </ul>
        </div>
    )
}
export default Category