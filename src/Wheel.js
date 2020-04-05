import React from 'react'
import PieChart from 'react-minimal-pie-chart'

const colors = [ 'red', 'blue', 'green', 'orange' ]

const Wheel = ({ activities }) => (
	<div style={{ flexGrow: 1 }}>
		<div style={{ position: 'fixed', bottom: 164 }}>
			<PieChart
				data={activities.map((a, i) => ({
					title: a.name,
					value: a.perc,
					color: colors[i]
				}))}
			/>
		</div>
	</div>
)

export default Wheel
