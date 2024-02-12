import carrousselFruitBowl from '../../assets/carroussel-fruit-bowl.webp'
import carrousselFruits from '../../assets/carroussel-fruits.webp'
import carrousselSandwich from '../../assets/carroussel-sandwich.webp'

import './carroussel.css'

export default function Carroussel () {

    return <>
    <div className="carroussel-container">
        <div className="wrapper">
            <img src={carrousselFruitBowl} alt="" />
            <img src={carrousselFruits} alt="" />
            <img src={carrousselSandwich} alt="" />
        </div>
    </div>
    </>
}