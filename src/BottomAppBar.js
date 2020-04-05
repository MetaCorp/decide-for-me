import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const BottomAppBar = ({ setPlayerInput, setActivityInput, addPlayer, start = () => null }) => {
	return (
		<AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, height: 84, paddingTop: 12 }}>
			<Toolbar>
				<TextField style={{ marginRight: 12 }} label="Name" onChange={(e) => setPlayerInput(e.target.value)} />
				<TextField
					style={{ marginRight: 12 }}
					label="Activity"
					variant="outlined"
					onChange={(e) => setActivityInput(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={addPlayer}>
					Add Player
				</Button>
				<Button
					style={{ position: 'absolute', bottom: 15, right: 42 }}
					variant="contained"
					color="secondary"
					onClick={start}>
					Start
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default BottomAppBar
