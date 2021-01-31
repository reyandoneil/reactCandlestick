import axios from 'axios'
import {
    FETCH_STOCK,
    SET_LOADING,
} from './index'

const baseUrl = 'http://testfai.herokuapp.com/ticker'

export const isLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}


export const getMonth = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const stock = await axios
                .get(baseUrl)
                .then((result) => {
                    const dataStock = result.data.ticker
                    const filterDataStock = dataStock.map((el) => {
                        const timestamp = el.timestamps
                        const date = new Date(el.timestamps)
                        const month = date.getMonth()
                        return {
                            month: month,
                            timeStamp: date,
                            price: el.price,
                        }
                    })
                    const newData = Object.values(filterDataStock.reduce((a, { month, ...props }) => {
                        if (!a[month])
                            a[month] = Object.assign({}, { month, data: [props] });
                        else
                            a[month].data.push(props);
                        return a;
                    }, {}));
                    const detailCandleStick = newData.map(el => {
                        const date = []
                        const data = []
                        el.data.map(el => {
                            data.push(el.price);
                            date.push(el.timeStamp)
                        })
                        return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                    })
                    dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                    dispatch(isLoading(false))
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getDay = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result,'result');
                const dataStock = result.data.ticker
                const filterByDay = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const day = Math.floor(el.timestamps / (1000 * 60 * 60 * 24))
                    return {
                        day: day,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByDay.reduce((a, { day, ...props }) => {
                    if (!a[day])
                        a[day] = Object.assign({}, { day, data: [props] });
                    else
                        a[day].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }
}

export const get7Hour = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result);
                const dataStock = result.data.ticker
                const filterByhour = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const hour = Math.floor(el.timestamps / (1000 * 60 * 60) / 7)
                    return {
                        hour: hour,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByhour.reduce((a, { hour, ...props }) => {
                    if (!a[hour])
                        a[hour] = Object.assign({}, { hour, data: [props] });
                    else
                        a[hour].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }

}

export const get3Hour = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result);
                const dataStock = result.data.ticker
                const filterByhour = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const hour = Math.floor(el.timestamps / (1000 * 60 * 60) / 3)
                    return {
                        hour: hour,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByhour.reduce((a, { hour, ...props }) => {
                    if (!a[hour])
                        a[hour] = Object.assign({}, { hour, data: [props] });
                    else
                        a[hour].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }

}

export const get30Minute = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result);
                const dataStock = result.data.ticker
                const filterByminute = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const minute = Math.floor(el.timestamps / (1000 * 60) / 30)
                    return {
                        minute: minute,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByminute.reduce((a, { minute, ...props }) => {
                    if (!a[minute])
                        a[minute] = Object.assign({}, { minute, data: [props] });
                    else
                        a[minute].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }
}

export const get15Minute = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result);
                const dataStock = result.data.ticker
                const filterByminute = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const minute = Math.floor(el.timestamps / (1000 * 60) / 15)
                    return {
                        minute: minute,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByminute.reduce((a, { minute, ...props }) => {
                    if (!a[minute])
                        a[minute] = Object.assign({}, { minute, data: [props] });
                    else
                        a[minute].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }
}

export const get5Minute = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result);
                const dataStock = result.data.ticker
                const filterByminute = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const minute = Math.floor(el.timestamps / (1000 * 60) / 5)
                    return {
                        minute: minute,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByminute.reduce((a, { minute, ...props }) => {
                    if (!a[minute])
                        a[minute] = Object.assign({}, { minute, data: [props] });
                    else
                        a[minute].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }
}



export const getWeek = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        const data = await axios
            .get(baseUrl)
            .then((result) => {
                console.log(result);
                const dataStock = result.data.ticker
                const filterByWeek = dataStock.map(el => {
                    const date = new Date(el.timestamps)
                    const week = Math.floor(el.timestamps / (1000 * 60 * 60 * 24 * 7))
                    return {
                        week: week,
                        date: date,
                        price: el.price
                    }

                })
                const newData = Object.values(filterByWeek.reduce((a, { week, ...props }) => {
                    if (!a[week])
                        a[week] = Object.assign({}, { week, data: [props] });
                    else
                        a[week].data.push(props);
                    return a;
                }, {}));
                // console.log(newData);
                const detailCandleStick = newData.map(el => {
                    const date = []
                    const data = []
                    el.data.map(el => {
                        data.push(el.price);
                        date.push(el.date)
                    })
                    return { x: date[0], y: [data[0], Math.max.apply(Math, data), Math.min.apply(Math, data), data[data.length - 1]] }
                })
                console.log(detailCandleStick);
                dispatch({ type: FETCH_STOCK, payload: detailCandleStick })
                dispatch(isLoading(false))

            })
            .catch(err => {

                console.log(err);
            })
    }

}
