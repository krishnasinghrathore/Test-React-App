import React, { Component } from 'react';
import './control.css';

class Control extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services')
        .then(res=>res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items:json.data,
            })
        })
    }
  render() {
      var{isLoaded,items}=this.state;
      console.log(items);
      if(!isLoaded){
          return <div>Loading...</div>
      }
      else{
        return (
            <div>
                <p className="App-intro">
                </p>
                <ul>
                    {items.map(item =>(
                        <li key={item.id}>
                            {item.attributes.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
      }
  }
}

export default Control;