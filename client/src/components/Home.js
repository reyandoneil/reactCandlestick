import { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getMonth, getDay, get7Hour, getWeek, get30Minute, get3Hour, get15Minute, get5Minute } from '../store/action/stock-action'
import Chart from './Chart'
import { Button } from 'react-bootstrap'

function Home() {
    const dispatch = useDispatch()
    const dataStock = useSelector(state => state)
    const [stock, setStock] = useState()
    const isLoading = dataStock.isLoading

    useEffect(() => {
        setStock(dataStock.dataStock)
    }, [isLoading])

    useEffect(() => {
        if (stock === undefined) {
            oneDay()
        }
    }, [stock])

    const oneDay = () => {
        dispatch(getDay())
        setStock(dataStock.dataStock)
    }

    const oneMonth = () => {
        dispatch(getMonth())
        setStock(dataStock.dataStock)
    }

    const sevenHour = () => {
        dispatch(get7Hour())
        setStock(dataStock.dataStock)
    }

    const threeHour = () => {
        dispatch(get3Hour())
        setStock(dataStock.dataStock)
    }

    const Minute30 = () => {
        dispatch(get30Minute())
        setStock(dataStock.dataStock)
    }

    const minute15 = () => {
        dispatch(get15Minute())
        setStock(dataStock.dataStock)
    }
    const minute5 = () => {
        dispatch(get5Minute())
        setStock(dataStock.dataStock)
    }
    const week = () => {
        dispatch(getWeek())
        setStock(dataStock.dataStock)
    }

    console.log(stock);
    return (
        <div>
            <div>
                <Button variant="outline-primary" className='btn' onClick={() => minute15()}>15 Minute</Button>
                <Button variant="outline-primary" className='btn' onClick={() => minute5()} >5 Minute</Button>
                <Button variant="outline-primary" className='btn' onClick={() => Minute30()}>30 Minute</Button>
                <Button variant="outline-primary" className='btn' onClick={() => threeHour()}>3 Hours</Button>
                <Button variant="outline-primary" className='btn' onClick={() => sevenHour()}>7 Hours</Button>
                <Button variant="outline-primary" className='btn' onClick={() => oneDay()}>1 Days</Button>
                <Button variant="outline-primary" className='btn' onClick={() => week()}>1 Week</Button>
                <Button variant="outline-primary" className='btn' onClick={() => oneMonth()}>1 Month</Button>
            </div>
            <Chart data={stock} isLoading={isLoading} />
            <h1>Candle Stick Price</h1>
        </div>
    )
}

export default Home
