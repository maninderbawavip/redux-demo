import { Component } from "react";
import { connect } from "react-redux";
import { updateFirstName, updateLastName } from "./redux/actions/UserActions";

class App extends Component {

  // has a context memeory which is accesible by this
  // this -> context of class or method at which it is being called
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
    // this.checkDataNew = this.checkData.bind(this)
  }

  changeFirstName = () => {
    this.props.updateFirstName(this.state.inputValue)
  }

  changeLastName = () => {
    this.props.updateLastName(this.state.inputValue)
  }

  render() {

    return (<div>

      <p> hello {this.props.fullName} </p>

      <input type="text" value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />

      <button onClick={this.changeFirstName}>Change First Name</button>
      <button onClick={this.changeLastName}>Change Last Name</button>
      
      <div>

        {/* {this.props.posts.map(item => {
          return <p>{item.postTitle}</p>
        })} */}
      </div>

    </div>)
  }

}
// mapStoreStateToComponentProps

//mapStateToProps


const mapStateToProps = (state) => {
  // receives the global store state
  // returns the props to be injected in the component

  return {
    posts: state.postsInfo,
    fullName: state.userInfo.firstName + " " + state.userInfo.lastName
  }
}


export default connect(mapStateToProps, { updateFirstName, updateLastName })(App);
