import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useDispatch } from 'react-redux'
import { StarButton } from './StarButton'
import { setFavorite } from '../features/dataSlice'

const PokemonCard = (props) => {
    const dispatch = useDispatch()
    const typesString = props.types.map(elem => elem.type.name).join(', ')

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: props.id }))
    }

    return <Card
        title={props.name}
        key={props.name}
        cover={<img src={props.url} alt={props.name}/>}
        extra={<StarButton isFavorite={props.favorite} onClick={handleOnFavorite} />}
    >
        <Meta description={typesString}/>
    </Card>
}

export default PokemonCard