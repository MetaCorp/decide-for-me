import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import PlayerList from './PlayerList'
import ActivityList from './ActivityList'

import Wheel from './Wheel'

import BottomAppBar from './BottomAppBar'

const App = () => {
	const [ players, setPlayers ] = useState([])
	const [ activities, setActivities ] = useState([])

	const [ playerInput, setPlayerInput ] = useState('')
	const [ activityInput, setActivityInput ] = useState('')

	const addPlayer = () => {
		const player = {
			name: playerInput,
			activity: activityInput
		}

		if (player.name === '' || player.activity === '') return

		setPlayers([ ...players, player ])

		const i = activities.findIndex((a) => a.name === player.activity)

		if (i === -1) setActivities(calculatePercent([ ...activities, { name: player.activity, count: 1 } ]))
		else {
			activities[i].count++
			setActivities(calculatePercent(activities))
		}
	}

	const calculatePercent = (activities) => {
		for (let i = 0; i < activities.length; i++) {
			activities[i].perc = activities[i].count / (players.length + 1) // +1 because state not recalculated
		}

		return activities
	}

	return (
		<div className="App" style={{ display: 'flex', height: '100%', padding: '16px 42px' }}>
			<div>
				<form noValidate autoComplete="off" />
			</div>

			<PlayerList players={players} />

			<Wheel activities={activities} />

			<ActivityList activities={activities} />

			<BottomAppBar setActivityInput={setActivityInput} setPlayerInput={setPlayerInput} addPlayer={addPlayer} />
		</div>
	)
}

export default App
