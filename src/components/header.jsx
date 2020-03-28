import React from "react";

class Header extends React.PureComponent {
  constructor(props){
    console.log('%cHeader constructor','color:blue')
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
    console.log('%cHeader Reder','color:blue')
    return (
      <div>
          <h1 className="aling_cente">Welcome to Header</h1>
      </div>
    );
  }
}

export default Header;
