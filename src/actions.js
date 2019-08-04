import {fetchUsersFromApi} from './Api'

export const fetchUsers = () => {
  return (dispatch => {
    fetchUsersFromApi().then((users) => {
      dispatch({
        type: 'FETCH_USERS_SUCCESS',
        payload: users
      })
    })
  })
}
