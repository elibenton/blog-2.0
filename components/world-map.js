// Package Imports
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	Graticule
} from 'react-simple-maps'

// Utility Imports
import { map } from '../utils/country-maps'

const WorldMap = ({ coordinates, country }) => {
	return (
		<ComposableMap
			width={map.get(country).width}
			height={map.get(country).height}
			projection={country === 'world' ? 'geoEqualEarth' : 'geoMercator'}
			projectionConfig={{
				rotate: [
					map.get(country).yaw,
					map.get(country).pitch,
					map.get(country).roll
				],
				scale: map.get(country).scale
			}}>
			{country === 'world' && <Graticule stroke='#F53' step={[11.99, 11]} />}
			<Geographies geography={map.get(country).file}>
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
