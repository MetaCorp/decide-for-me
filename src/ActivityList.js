import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

const ActivityList = ({ activities }) => (
	<div style={{ width: 200 }}>
		<h3>{'Activities (' + activities.length + ')'}</h3>
		{activities.map((activity) => (
			<Card style={{ marginBottom: 16 }}>
				<CardHeader
					// action={
					//   <IconButton aria-label="settings">
					//     <MoreVertIcon />
					//   </IconButton>
					// }
					title={activity.name}
					subheader={activity.perc * 100 + '%'}
				/>
			</Card>
		))}
	</div>
)

export default ActivityList
