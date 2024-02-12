import carrousselFruitBowl from '../../assets/carroussel-fruit-bowl.jpg'
import carrousselFruits from '../../assets/carroussel-fruits.jpg'
import carrousselSandwich from '../../assets/carroussel-sandwich.jpg'

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