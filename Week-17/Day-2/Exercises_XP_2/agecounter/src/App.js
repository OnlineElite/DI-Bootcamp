import { onAgeUp, onAgeDown } from './actions/AgeCounterAction';
import {connect} from 'react-redux'
import './App.css';

function App(props) {

  function handellButton(e){
    e.preventDefault()
    let curentAge = e.target.parentElement.parentElement.children[0].dataset.id
    let btnType = e.target.dataset.id
    //console.log('curentAge', curentAge)
    
    switch(btnType){
      case 'ageup':
        props.up(curentAge)
        break;
      case 'agedown':
        props.down(curentAge)
        break;
      default :
        console.log('this is the wrong button')
    }
  }
  return (
    <div className="App">
      <div>
            <h2 data-id={props.age} >Your age: {props.age} </h2>
            <div>
                <button onClick={handellButton}  data-id ='ageup' >Age Up</button>
                <button onClick={handellButton}  data-id='agedown' >Age Down</button>
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    age : state.age
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    up: (curentAge) =>{
      dispatch(onAgeUp(curentAge))
    },
    down: (curentAge) =>{
      dispatch(onAgeDown(curentAge))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
