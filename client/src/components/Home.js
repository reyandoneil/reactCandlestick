import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStock } from '../store/action/stock-action'

function Home() {
    const dispatch = useDispatch()
    const dataStock = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchStock())
        // console.log(dataStock);
    }, [])
    if (dataStock.isLoading === true) {
        console.log('.....loading');
    } else {
        console.log(dataStock);
    }
    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Home
