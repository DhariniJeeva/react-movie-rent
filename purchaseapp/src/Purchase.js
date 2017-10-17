import React, {Component} from 'react';



class Purchase extends Component {

  addPrice(price){
      this.setState(
        {
          total : this.state.total + price
        }
      )
  }

  constructor(props){
    super(props);

    this.state = {
        total : 0
    };

    this.addPrice = this.addPrice.bind(this);
  }
  render(){

    console.log(this.props.items) ;
    var movies = this.props.items.map((item, i) =>
      {
        return <Course name={item.name} price ={item.price}
                key={i} addPrice={this.addPrice} active ={item.active}/>
      });
    return(
      <div>
        <h1>Rent a movie! </h1>
        <div id="movies">
          {movies}
          <p id="total">Total : <b>{this.state.total}</b></p>
        </div>
      </div>
    );
  }
}

class Course extends Component {

  clicker(){
    var active = !this.state.active ;
    this.setState({active : active});
    this.props.addPrice(active ? this.props.price : -this.props.price);

  }

  constructor(props){
    super(props);

    this.state = {
      active : false
    };

    this.clicker = this.clicker.bind(this);
  }
  render(){
    return(
      <div>
        <p className= {this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name}<b>{this.props.price}</b></p>
      </div>
    );
  }
}

//this is for reading the array using map
// { this.props.items.map((items, i) => {
//   return([<p> {items.name}</p>,
//       <p> {items.price}</p>
//   ]) ;
//
// })}


export default Purchase;
