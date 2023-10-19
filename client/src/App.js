import React, {Fragment} from 'react';
import './App.css';
import InputEmployee from './components/inputEmployee';
import ListEmployees from './components/ListEmployees';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputEmployee/>
        <ListEmployees/>
      </div>
    </Fragment>
  )
}


export default App;
