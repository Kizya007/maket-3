import Binocular from "../assets/img/Binocular.png"
import "../assets/Category.scss"
import image2 from "../assets/img/image 2.png"
import image3 from "../assets/img/image 3.png"
import image4 from "../assets/img/image 4.png"
import image5 from "../assets/img/image 5.png"
import image6 from "../assets/img/image 6.png"
import image7 from "../assets/img/image 7.png"
import image8 from "../assets/img/image 8.png"
import image9 from "../assets/img/image 9.png"
import image10 from "../assets/img/image 10.png"

function Category() {
    return (
        <div className="categories">
            <div className="categories-header">
                <span className="categories-header__title">
                    Популярные категории
                </span>
                <span className="categories-header__link">
                    Перейти в каталог
                </span>
            </div>
            <ul className="categories-list">
                <li className="category-list__item">
                    <img src={Binocular} className="category-img" />
                    <div className="category-list__value">
                        <span className="category-name">
                            Бинокли
                        </span>
                        <span className="category-count">
                            35 товаров
                        </span>
                    </div>
                </li>
                <div className="category-list__item">
                    <img src={image2} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image3} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image4} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image5} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image6} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image7} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image8} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image9} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
                <div className="category-list__item">
                    <img src={image10} />
                    <div className="category-list__value">
                        <span>
                            Бинокли
                        </span>
                        <span>
                            35 товаров
                        </span>
                    </div>
                </div>
            </ul>
        </div>
    )
}
export default Category