import React, { useEffect } from 'react'
import Shikwasa from 'shikwasa'
import * as Chapter from 'shikwasa/dist/shikwasa.chapter.cjs'

export default function Player() {
	useEffect(() => {
		Shikwasa.use(Chapter)
		const player = new Shikwasa({
			audio: {
				container: () => document.querySelector('#container'),
				title: 'Hello World!',
				artist: 'Shikwasa FM',
				cover: 'cdale.jpeg',
				src: 'jones.wav'
			}
		})

		player.update({
			src: 'jones.wav',
			chapters: [
				// Array, optional
				{ title: 'hello', startTime: 0, endTime: 3 }, // the first chapter
				{ title: 'goodbye', startTime: 3, endTime: 6 }
			]
		})
	}, [])

	return (
		<div>
			<h1>Hello</h1>
			<div id='container' />
		</div>
	)
}
