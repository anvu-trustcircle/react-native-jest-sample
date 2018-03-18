const fetch = require('isomorphic-fetch')

export const anAction = () => ({ type: 'AN_ACTION' })

export const success = () => {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}

export const fetchData = () => {
  return dispatch => {
    return fetch('https://facebook.github.io/react-native/movies.json') // Some async action with promise
      .then(() => {
        dispatch(success())
      })
  }
}
