import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

const PlayerList = ({ players }) => (
	<div style={{ width: 200 }}>
		<h3>{'Players (' + players.length + ')'}</h3>
		{players.map((player) => (
			<Card style={{ marginBottom: 16 }}>
				<CardHeader
					// action={
					//   <IconButton aria-label="settings">
					//     <MoreVertIcon />
					//   </IconButton>
					// }
					title={player.name}
					subheader={player.activity}
				/>
			</Card>
		))}
	</div>
)

export default PlayerList
