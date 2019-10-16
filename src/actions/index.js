export const increment = (an) => {
    return {
        type: 'INCREMENT',
        payload: an
    }
}

export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}