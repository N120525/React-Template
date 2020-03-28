import React from "react";
import axios from "axios";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      employee_details: []
    };
  }
  componentWillMount() {
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.state.name) {
      this.setState({});
    }
  }
  componentDidMount() {
    this.api_fetchProducts();
  }

  //example of feching api
  api_fetchProducts = () => {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then(res => {
      console.log("res.data",res.data.data);
      this.setState({
        employee_details: res.data.data
      });
    });
  };

  componentWillUnmount() {
  }

  render() {
    const {employee_details} = this.state
    return (
      <div>
        <h1 className="aling_cente">Wel come to Home</h1>
        <h3>Employee Details</h3>
        {employee_details.length > 0 ? employee_details.map((data)=>{
          return (
            <div  key={data.id} style={{borderBottom:'1px solid green'}}>
              <p>Name : {data.employee_name}</p>
              <p> age : {data.employee_age}</p>
              <p> salary :{data.employee_salary}</p>
            </div>
           
          )
        }): <p className="aling_cente"> Employee Details Loading....</p>}
      </div>
    );
  }
}

export default Home;
