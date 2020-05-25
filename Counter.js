import React from 'react';
import {connect} from 'react-redux';


function Counter(props){
    console.log('props: ', props)
    return(
        <div>
            <h2>the counter value is:{props.counterState}</h2>
            <button onClick={()=>props.dispatch({type:'INCREMENT'})}>+</button>
            <button className= "b2" onClick={()=>props.dispatch({type:'DECREMENT'})}>-</button>


            <button onClick={()=>props.dispatch({type:'INCREMENT',payload:2})}>+2</button>
            <button onClick={()=>props.dispatch({type:'DECREMENT',payload:3})}>-3</button>


        </div>
    )

    
}
const mapStateToProps = (state) => {


    return {
        counterState: state.count
      };
}

export default connect(mapStateToProps)(Counter)