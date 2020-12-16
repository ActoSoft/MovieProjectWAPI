import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <Link to='/movies'>
            <h2>Ir a la lista de películas</h2>
        </Link>
        </>
    )
}