export const fetchUsersFromApi = () => {
  return fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => {
      const usersObj = data.results.reduce((result, currentUser) => {
        console.log('Api.js currentUser', currentUser)
        result[currentUser.phone] = currentUser

        return result
      }, {})

      console.log('Api.js usersObj', usersObj)

      return {
        users: usersObj
      }
    })
    .catch(error => console.error(error))
}
