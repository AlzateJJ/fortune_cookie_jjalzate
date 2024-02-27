import './styles/PhraseCard.css'

const PhraseCard = ({ phraseRandom }) => {

    const { phrase } = phraseRandom
    const { author } = phraseRandom
    // console.log(phraseRandom)
    return (
        <>
            <p className='card__phrase'>{phrase}</p>
            <p className='phrase__author'>{author}</p>
        </>
    )
}

export default PhraseCard