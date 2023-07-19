
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/person/Person';
import Header from './components/Header/Header';
   



function App() {
  return (
    <div className="App">
      <Header></Header>
       <Country></Country>
       <Person></Person>
    </div>
  );
}
 

 


export default App;
