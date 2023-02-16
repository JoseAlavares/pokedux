import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoading } from '../features/uiSlice'
import { getPokemon, getPokemonDetails } from '../api'

const initialState = {
    pokemons: [],
    pokemonsFilter: []
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async (_, { dispatch }) => {
        // dispatch loader
        // fetch
        //dispatch loader
        dispatch(setLoading(true))
        const { results } = await getPokemon()
        const pokemonsDetailed = await Promise.all(
            results.map(pokemon => getPokemonDetails(pokemon))
        )
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLoading(false))
    }
)
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
            state.pokemonsFilter = action.payload
        },
        setPokemonsFilter: (state, action) => {
            const filterBy = action.payload.toString().toLowerCase()

            if (filterBy !== '') {
                const coincidence = state.pokemons.filter(pokemon => pokemon.name.toString().toLowerCase().includes(filterBy))
                state.pokemonsFilter = coincidence ?? state.pokemons
            }
            else {
                state.pokemonsFilter = state.pokemons
            }
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemonsFilter.findIndex(pokemon => pokemon.id === action.payload.pokemonId)

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFilter[currentPokemonIndex].favorite
                state.pokemonsFilter[currentPokemonIndex].favorite = !isFavorite
            }
        }
    }
})

export const { setPokemons, setPokemonsFilter, setFavorite } = dataSlice.actions
export default dataSlice.reducer