import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import cache from 'memory-cache'

function checkCache(key) {
	if (cache.get(key)) {
		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)
		return value
	}
}

function callAPI(key) {
	const res = await fetch(
	`https://maps.googleapis.com` +
					`/maps/api/geocode/json?` +
					`address=${key}&` +
					`key=${process.env.GOOGLE_API_KEY}`
			)

						const data = await res.json()
	
}

export default function geocode({location}) {
	return checkCache(location)
}
