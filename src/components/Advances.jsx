import Deliviry from "../assets/Icon/DeliviryIcon"
import Certificate from "../assets/Icon/CertificateIcon"
import Prize from "../assets/Icon/PrizeIcon"
import Like from "../assets/Icon/LikeIcon"
import "../assets/Advances.scss"

function Advances() {
    return (
        <div className="advances">
            <div className="advances-list">
                <span className="advances-list__name">
                    Быстрая
                    доставка
                </span>
                <Deliviry />
            </div>
            <div className="advances-list">
                <span className="advances-list__name">
                    Весь товар сертифицирован
                </span>
                <Certificate />
            </div>
            <div className="advances-list">
                <span className="advances-list__name">
                    3 года
                    гарантии
                </span>
                <Prize />
            </div>
            <div className="advances-list">
                <span className="advances-list__name">
                    10 лет
                    на рынке
                </span>
                <Like />
            </div>
        </div>
    )
}
export default Advances