export const increment_five = (num) => {
  return {
    type: 'INCREMENT_FIVE',
    payload: num,
  }  
}

export const increment = () => {
  return {
    type: 'INCREMENT'
  }  
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }  
}

export const setMovie = (data) => {
  return {
    type: 'FETCH_MOVIE', 
    payload: data,
  }
}