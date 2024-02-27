import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import imgs from '../utils/arrimages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ( {setterPhrase, setterImageSelected} ) => {

    // const { setRandomPhrase } = setterPhrase

    const nextPhrase = () => {
        const nuevaFrase = getRandomFromArray(phrases)
        setterPhrase(nuevaFrase)

        const nuevaImg = getRandomFromArray(imgs)
        setterImageSelected(nuevaImg)
    }

    return (
        <button className="card__btn" onClick={nextPhrase}>Descubrir mi suerte 🤞</button>
    )
}

export default BtnPhrase