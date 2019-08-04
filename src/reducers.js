const defaultState = {
  users: []
}
export default (state = defaultState, {type, payload}) => {
  console.log('reducers.js payload', payload)
  switch (type) {
    case 'FETCH_USERS_SUCCESS': {
      return {
        users: payload.users
      }
    }

    default:
     return state
   }
}
