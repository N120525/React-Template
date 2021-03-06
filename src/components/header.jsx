import React from "react";
import {connect} from 'react-redux'
import {simpleAction} from '../actions/act_sample'

class Header extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={}
  }
  componentWillMount(){
    console.log('%cHeader willmount','color:blue')
  }
  
  componentDidMount(){
    console.log('%cHeader componentDidMount','color:blue')
  }

  componentWillUnmount(){
    console.log('%cHeader unMount','color:blue')
  }

  render() {
    return (
      <div>
          <h1 onClick={this.props.simple_action} className="aling_cente">Click here for message</h1>
          <p className="aling_cente">Message  : {this.props.message}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    simple_action: () => dispatch(simpleAction()),
  }
}

const mapStateToProps = store => {
  return {
    message : store.sampleReducer.message
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
