import './styles.css'

const CharacterCard = ({ character }) => {

    return (
        <div className="character-detail-container">
            <h3>Nombre: {character.name}</h3>
            <img
                src={character.img}
                alt= {character.name}
            />
            <p>Biografía: {character.biography}</p>
        </div>
    )
}

export default CharacterCard