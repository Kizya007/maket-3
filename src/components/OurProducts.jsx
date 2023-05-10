import Binocular from "../assets/Icon/BinocularIcon"
import "../assets/Products.scss"

function OurProducts() {
    return (
        <div className="products">
            <span className="products-title">Наши товары</span>
            <div className="products-list">
                <Binocular />
                <div className="products-list__item">
                    <ul>
                        <li>Бинокли</li>
                        <li>Армейско-полевой</li>
                        <li>Астрономический</li>
                        <li>Для города</li>
                        <li>Для детей</li>
                        <li>Для охоты и рыбалки</li>
                        <li>Любительский</li>
                        <li>Для профессионалов</li>
                        <button>Показать все</button>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default OurProducts