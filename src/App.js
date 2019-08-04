import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from './actions'
import UsersManagmentAppBar from './components/AppBar'
import UsersManagmentList from './components/UsersManagmentList'
import UserModal from './components/UserModal'
import './App.css';

class App extends Component {
  componentDidMount() {
    const {fetchUsers} = this.props
    fetchUsers()
  }

  onUserClick = (user) => {
    const {router} = this.props
    this.setState({user})
    router.replace(`/user-management/${user.phone}`)
  }

  render() {
    const {users} = this.props
    return (
      <div className="App">
        <UsersManagmentAppBar />
        <UsersManagmentList users={users} onUserClick={this.onUserClick}/>

      </div>
    );
  }
}
// {children}
const mapStateToProps = (store) =>{
  return {
    users: store.users
  }
}

const mapDispatchToProps = {fetchUsers}

export default connect(mapStateToProps, mapDispatchToProps)(App)
