import {baseUrl, numberOfEvents} from '../variables.js'

async function getEvents (userName) {
    const response = await fetch (`${baseUrl}/${userName}/events?per_page=${numberOfEvents}`)
    return await response.json()
}

export {getEvents}
