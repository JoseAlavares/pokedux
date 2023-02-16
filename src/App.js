import { Col } from 'antd'
import './App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './staticts/logo.svg'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { fetchPokemonWithDetails } from './features/dataSlice';

function App() {
  const pokemons = useSelector(state => state.data.pokemonsFilter, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonWithDetails())
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large'/>
      </Col>
      : <PokemonList pokemons={pokemons}/>}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App