import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { setPokemonsFilter } from '../features/dataSlice'

const Searcher = () => {
    const dispatch = useDispatch()

    const onSearch = (string) => {
        console.log(string)
        dispatch(setPokemonsFilter(string))
    }

    return <Input.Search placeholder='Buscar...' onSearch={onSearch} style={{ marginBottom: 30 }}/>
}

export default Searcher