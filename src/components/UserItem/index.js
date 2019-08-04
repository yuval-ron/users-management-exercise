import React, {Component} from 'react';

export default class UserItem extends Component {
  handleOnClick = (e) => {
    const {onClick, user} = this.props
    onClick(user)
  }

  render() {
    const {user} = this.props

    return (
      <div className="user-item" onClick={this.handleOnClick}>
        <div className='gender'>{user.gender}</div>
        <div className='age'>{user.dob.age}</div>
        <div className='name'>{user.name.title} {user.name.first} {user.name.last}</div>
        <div className='phone'>{user.phone}</div>
      </div>
    );
  }
}
