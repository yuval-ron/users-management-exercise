import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserModal extends Component {
  render() {
    const {params: {id}, users} = this.props
    const currentUser = users[id]

    console.log('index.js currentUser', currentUser)

    return (
      <div className="user-modal" onClick={this.handleOnClick}>
        <div className="user-modal" onClick={this.handleOnClick}>
          <div className='user-container'>
            <div className='title'>currentUser Details</div>
            <div className='gender'>{currentUser.gender}</div>
            <div className='age'>{currentUser.dob.age}</div>
            <div className='name'>{currentUser.name.title} {currentUser.name.first} {currentUser.name.last}</div>
            <div className='phone'>{currentUser.phone}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) =>{
  return {
    users: store.users
  }
}

export default connect(mapStateToProps)(UserModal)

    // <div className="user-modal" onClick={this.handleOnClick}>
    //     <div className='user-container'>
    //       <div className='title'>User Details</div>
    //       <div className='gender'>{user.gender}</div>
    //       <div className='age'>{user.dob.age}</div>
    //       <div className='name'>{user.name.title} {user.name.first} {user.name.last}</div>
    //       <div className='phone'>{user.phone}</div>
    //     </div>
    //   </div>
