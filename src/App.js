import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {

  // has a context memeory which is accesible by this
  // this -> context of class or method at which it is being called
  constructor(props) {
    super(props)
    this.state = {
      value: "myButton"
    }
    // this.checkDataNew = this.checkData.bind(this)
  }


  checkData = () => {
    console.log(this, "from checkdata function")
    this.setState({
      value: "something"
    })
  }

  render() {
    console.log(this, 'from render')
    return (<div>hello {this.props.fullName}
    myButton
      <button onClick={this.checkData}>{this.state.value}</button>
    </div>)
  }

}
// mapStoreStateToComponentProps

//mapStateToProps


const mapStateToProps = (state) => {
  // receives the global store state
  // returns the props to be injected in the component
  return {
    fullName: state.firstName + " " + state.lastName
  }
}


export default connect(mapStateToProps)(App);
