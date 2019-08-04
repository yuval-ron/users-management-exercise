import React, {Component} from 'react'
import UserItem from '../UserItem'

export default class UsersManagementList extends Component {
  onUserClick = (user) => {
    const {onUserClick} = this.props
    onUserClick(user)
  }

  render() {
    const {users} = this.props
    return (
      <div className="users-management-container">
        { users &&
          Object.keys(users).map((userId, index) => {
            const user = users[userId]

            return (
              <UserItem key={index} user={user} onClick={this.onUserClick} />
            )
          })
        }
      </div>
    );
  }
}
