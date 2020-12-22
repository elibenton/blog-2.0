// src/components/WorldMap.js

import React from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker
} from 'react-simple-maps'

const geoUrl = '/gadm36_IND_1.json'

const WorldMap = ({ coordinates }) => {
	return (
		<ComposableMap
			width={600}
			height={600}
			projection='geoMercator'
			projectionConfig={{
				rotate: [-82, -22, 0],
				scale: 1150
			}}>
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map(geo => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							fill='rgba(243, 244, 246)'
							stroke='black'
							strokeWidth={1}
						/>
					))
				}
			</Geographies>
			{coordinates.map(coord => (
				<Marker coordinates={[coord.lng, coord.lat]}>
					<circle r={7} fill='#F53' stroke='black' strokeWidth={0.5} />
				</Marker>
			))}
		</ComposableMap>
	)
}

export default WorldMap
