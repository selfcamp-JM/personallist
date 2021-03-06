import React, { Component } from 'react';
import './App.css';


const App = ()=>(<Personlist/>)



const Personlist=()=>{
  const people = [
    {
      img:22,name:"Jon",job:"Developer"
    },
    {
      img:26,name:"Smith",job:"Student"
    },
    {
      img:23,name:"Link",job:"Teacher"
    }
  ]
  return(
  <div>
    <Person person ={people[0]}/>
    <Person person ={people[1]}>
    Hello it is me
    </Person>
    <Person person ={people[2]}/>
    <h3 style={{textAlign:"center"}}>Here in this small project, I practiced how to create new components and pass data from one another.</h3>
  </div>
  )
}


const Person=(props)=>{
  const{img,name,job} = props.person;
  const{children} = props;
  
  const url = 'https://randomuser.me/api/portraits/thumb/men/'+img+'.jpg';
  
  return(
    
    <div className="person">
    <img src={url} alt=""/>
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}

    </div>
    </div>
    
  )
}


export default App;

