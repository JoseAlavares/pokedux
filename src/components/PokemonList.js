import PokemonCard from './PokemonCard'
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
    return <div className='PokemonList'>
        {pokemons.map(pokemon => (
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.sprites.front_default}
                types={pokemon.types}
                id={pokemon.id}
                favorite={pokemon.favorite}
            />
    ))}
    </div>
}

// PokemonList.defaultProps = {
//     pokemons: Array(10).fill('')
// }
export default PokemonList