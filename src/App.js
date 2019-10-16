import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions';
import {Button,ButtonGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App" >
      <h1> Count: {counter} </h1>

      <ButtonGroup>
        <Button onClick={() => dispatch(increment())} > + </Button>
        <Button onClick={() => dispatch(decrement())} > - </Button>
      </ButtonGroup>
  
      <h1> {isLogged} </h1>
    </div>
  );
}

export default App;