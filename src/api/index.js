import axios from 'axios'

const getPokemon = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=151')
        return data
    } catch (error) {
        console.error(error)
    }
    // return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    //     .then(console.log)
    //     .catch(console.error)
}

const getPokemonDetails = async (pokemonURL) => {
    try {
        const { data } = await axios.get(pokemonURL.url)
        return data
    } catch (error) {
        console.error(error)
    }
}

export { getPokemon, getPokemonDetails }