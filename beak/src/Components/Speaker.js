import React from 'react'

function Speaker({people}) {
  return (
	<>
	<li class="list-group-item"><span class="icon c1">{people[0].initial}</span>{people[0].name}</li>
	</>
  )
}

export default Speaker