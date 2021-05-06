
import './App.css';

import {CardList} from './components/card-list/card-list.components'

import React,{Component} from 'react';

import {SearchBar} from './components/seachbar/searchbar.components'

class App extends Component{
	constructor(){
		super();

		// this.state={
		// 	string:'hello uno'
		// }
		this.state={
			monsters:[]	,
			searchfield:""};

			//this.handlechange=this.handlechange.bind(this);
	};
//life cycle method
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json()).then(users=>this.setState({monsters:users}));
	}
//class method
	handlechange=(e)=>{
		this.setState({searchfield:e.target.value});
	}


  render(){
  	const {monsters,searchfield}=this.state;

  	const filteredMonsters=monsters.filter(monster=>
  		monster.name.toLowerCase().includes(searchfield.toLowerCase()))

  	return (<div className="App">

  		<h1>Monsters Rolodex</h1>
	  	<SearchBar placeholder='search monsters' handlechange={this.handlechange}/>
	  	<CardList monsters={filteredMonsters}/>
  	   
    </div>)
  }
    
  
}

export default App;
