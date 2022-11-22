import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal }  from "../features/goals/goalSlice"

import React from "react";

const GoalForm = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({text}))
    setText('')
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="text">
            Goals
            <input className="text" name='text' id='text' value ={text} onChange={(e)=> setText(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
