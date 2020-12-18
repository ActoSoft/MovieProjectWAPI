const CharacterCard = ({ character }) => {

    return (
        <>
            <h3>Nombre: {character.name}</h3>
            <img
                src={character.img}
                alt= {character.name}
            />
            <p>Biografía: {character.biography}</p>
        </>
    )
}

export default CharacterCard