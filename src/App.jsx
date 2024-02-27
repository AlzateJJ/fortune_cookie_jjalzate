import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import { useState } from 'react'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utils/arrimages.json'

function App() {

  const initialValue = getRandomFromArray(phrases)
  const [randomPhrase, setRandomPhrase] = useState(initialValue)

  const initialImage = getRandomFromArray(arrImages)
  const [imageSelected, setImageSelected] = useState(initialImage)

  const styleObject = {
    backgroundImage: `url("fondo${imageSelected}.jpg")`
  }

  return (
    <div className = "app" style={styleObject}>
      <h1 className='app__title'>Galleta de la fortuna 🥠</h1>

      <article className='app__card'>
        <PhraseCard phraseRandom = {randomPhrase} />
        <BtnPhrase
          setterPhrase = {setRandomPhrase}
          setterImageSelected = {setImageSelected} />
      </article>
    </div>
  )
}

export default App
