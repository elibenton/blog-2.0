import React, { createRef, useEffect, useRef } from 'react'
import Shikwasa from 'shikwasa'
// import * as Chapter from 'shikwasa/dist/shikwasa.chapter.cjs'

export default function Player() {
	const playerRef = useRef(null)

	useEffect(() => {
		const player = new Shikwasa({
			audio: {
				title: `Facebook's Supreme Court`,
				artist: 'Radiolab',
				cover: '/rl-logo.png',
				src: '/audio/radiolab_podcast21facebookssupremecourt.mp3',
				speedOptions: [0.75, 1.25, 1.5, 2.0],
				download: true
			}
		})
	}, [])

	return <div ref={playerRef} className="container"></div>
}
