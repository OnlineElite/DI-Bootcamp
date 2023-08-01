import React from "react";
//import './Day.css';
import { connect } from 'react-redux';
import { forward } from "./actions";


const Day = (props) => {

    const handleSubmit = event => {
        event.preventDefault();
        const button = event.target.dataset.button
        const day = event.target.parentElement.firstElementChild.dataset.day

        switch (button) {
            case "next":
                props.next(day)
                break;
            default:
                console.log("wrong button")
        }
    }


    return (
        <div>
            <h1 data-day={props.weekday}>Today is <span>{props.weekday}</span></h1>
            <h4><span>{props.joke}</span></h4>
            <h4><span>{props.err}</span></h4>
            <button type="submit" onClick={handleSubmit} data-button="next">Go forward in the week & get a joke</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { weekday: state.weekday, joke: state.joke, err: state.err };
};

const mapDispatchToProps = dispatch => {
    return {
        next: (day) => {
            //call the action creator
            dispatch(forward(day))
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Day);