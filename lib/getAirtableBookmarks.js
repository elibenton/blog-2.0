const Airtable = require('airtable')

const base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID)

const table = base(process.env.AIRTABLE_TABLE_NAME)

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
	const minified = records.map((record) => minifyRecord(record))

	return minified.filter(({ fields }) => fields.Publish)
}

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
	return {
		id: record.id,
		fields: record.fields
	}
}

export default async function getBookmarks() {
	const records = await table.select({}).all()
	const minifiedRecords = await getMinifiedRecords(records)

	console.log(minifiedRecords)

	return minifiedRecords
}
