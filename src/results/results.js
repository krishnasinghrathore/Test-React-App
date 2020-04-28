import React, { Component } from 'react';
import './results.css';

class Providers extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10')
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

export default Providers;