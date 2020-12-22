import {
	ComposableMap,
	Geographies,
	Geography,
	Marker
} from 'react-simple-maps'

const geoUrl = new Map([
	[
		'india',
		{ file: '/gadm36_IND_1.json', yaw: -82, pitch: -22, roll: 0, scale: 1150 }
	],
	[
		'united-states',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'myanmar',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'spain',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'nepal',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'france',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'california',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'alabama',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'ecaudor',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	],
	[
		'argentina',
		{ file: '/gadm36_IND_1.json', yaw: 0, pitch: 0, roll: 0, scale: 1150 }
	]
])

const WorldMap = ({ coordinates, country }) => {
	return (
		<ComposableMap
			width={600}
			height={600}
			projection='geoMercator'
			projectionConfig={{
				rotate: [
					geoUrl.get(country).yaw,
					geoUrl.get(country).pitch,
					geoUrl.get(country).roll
				],
				scale: 1150
			}}>
			<Geographies geography={geoUrl.get(country).file}>
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
