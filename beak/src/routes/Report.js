import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Speaker from '../Components/Speaker';
import Summary from '../Components/Summary';
import Task from '../Components/Task'

function Report() {

	var tasks = [{'title':'Task title','date':'24 Apr'}];
	var dates = '24 Apr';
	var text = "this is the text that shows up as summary";
	var people = [{'name':'Teo','initial':'T'}];

  return (
	<>

		<Container>
			<Row>
				<Col>
					<p class="badge bg-primary">ID: 233</p>
					<h1>Report</h1>	
					<p class="date small">  Berlin, 23 April. 17:23h - 17:46h</p>
					<Summary text={text}></Summary>

					<Speaker people={people}></Speaker>

					
					<Task tasks={tasks} dates={dates} level={'danger'}></Task>
				</Col>
			</Row>

			
		</Container>
		
	</>

  )
}

export default Report