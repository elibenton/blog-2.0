import React, { useState, useEffect, useRef } from 'react'
import AudioControls from './audio-controls'
import Image from 'next/image'
import { upperCase } from 'voca'

const AudioPlayer = ({ tracks }) => {
	// State
	const [trackIndex, setTrackIndex] = useState(0)
	const [trackProgress, setTrackProgress] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)

	// Destructure for conciseness
	const { title, artist, color, image, audioSrc } = tracks[trackIndex]

	// Refs
	const audioRef = useRef(new Audio(audioSrc))
	const intervalRef = useRef()
	const isReady = useRef(false)

	// Destructure for conciseness
	const { duration, playbackRate } = audioRef.current

	const durMinutes = Math.floor(duration / 60)
	const durSeconds = Math.round(duration - durMinutes * 60)

	const progMinutes = Math.floor(trackProgress / 60)
	const progSeconds = Math.round(trackProgress - progMinutes * 60)

	const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%'
	const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextTrack()
			} else {
				setTrackProgress(audioRef.current.currentTime)
			}
		}, [1000])
	}

	const onScrub = (value) => {
		// Clear any timers already running
		clearInterval(intervalRef.current)
		audioRef.current.currentTime = value
		setTrackProgress(audioRef.current.currentTime)
	}

	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true)
		}
		startTimer()
	}

	const toPrevTrack = () => {
		if (trackIndex - 1 < 0) {
			setTrackIndex(tracks.length - 1)
		} else {
			setTrackIndex(trackIndex - 1)
		}
	}

	const toNextTrack = () => {
		if (trackIndex < tracks.length - 1) {
			setTrackIndex(trackIndex + 1)
		} else {
			setTrackIndex(0)
		}
	}

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play()
			startTimer()
		} else {
			audioRef.current.pause()
		}
	}, [isPlaying])

	// Handles cleanup and setup when changing tracks
	useEffect(() => {
		audioRef.current.pause()

		audioRef.current = new Audio(audioSrc)
		setTrackProgress(audioRef.current.currentTime)

		if (isReady.current) {
			audioRef.current.play()
			setIsPlaying(true)
			startTimer()
		} else {
			// Set the isReady ref as true for the next pass
			isReady.current = true
		}
	}, [trackIndex])

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause()
			clearInterval(intervalRef.current)
		}
	}, [])

	return (
		<>
			<div className="relative top-4">
				<input
					className="w-1/2"
					type="range"
					value={trackProgress}
					step="1"
					min="0"
					max={duration ? duration : ``}
					onChange={(e) => onScrub(e.target.value)}
					onMouseUp={onScrubEnd}
					onKeyUp={onScrubEnd}
				/>
			</div>
			<div className="flex flew-row border border-black p-2 w-1/2 items-center justify-between">
				<div className="flex-none flex flex-row items-center space-x-4">
					<Image
						className="artwork"
						src={image}
						width={100}
						height={100}
						alt={`track artwork for  by `}
					/>
					<div className="w-48">
						<h2 className="font-bold text-lg">{upperCase(artist)}</h2>
						<h3 className="text-2xl font-thin overflow-x-scroll">{title}</h3>
					</div>
				</div>
				<div>
					<AudioControls
						isPlaying={isPlaying}
						onPrevClick={toPrevTrack}
						onNextClick={toNextTrack}
						onPlayPauseClick={setIsPlaying}
					/>
					<button onClick={() => onScrub(audioRef.current.currentTime + 20) & onScrubEnd}>
						{' '}
						+20
					</button>
					<button onClick={() => onScrub(audioRef.current.currentTime - 20) & onScrubEnd}>
						{' '}
						-20
					</button>
					{/* <button onClick={() => (playbackRate += 0.25)}>SPEED</button> */}
					<h2>{playbackRate}</h2>
					<h3>
						{progMinutes}:{progSeconds} / {durMinutes}:{durSeconds}
					</h3>
					<button onClick={() => onScrub(300) & onScrubEnd}> FIVE MIN</button>
				</div>
			</div>
		</>
	)
}

export default AudioPlayer
