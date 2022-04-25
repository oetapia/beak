import React from 'react'
import icon from "../img/edit.svg"

function Task({tasks, dates, level}) {
  return (
	<>
		<div className={"card my-3 "  + level }>
			<div className="card-header">
				<h3 className="d-inline-block me-5">Task</h3>
				<button id="edit" className="btn">
					<img src={icon} alt="Edit" />
				</button>
			</div>
			<div className="card-body">
				<form >
					<fieldset className="row" />
						<legend>{tasks[0].title}</legend>
					<div className="mb-3 col">
						<select id="person" className="form-select">
						<option>Esteban</option>
						<option>Teo</option>
						<option>Damien</option>
						</select>
					</div>
					<div className="mb-3 col">
						<select id="date" className="form-select">
						<option>{dates}</option>
						<option>25 Apr</option>
						</select>
					</div>  									 
					</form>
			</div>
		</div>
	
	</>
  )
}

export default Task