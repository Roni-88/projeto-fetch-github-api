import {baseUrl} from '../variables.js'

async function getEvents (userName) {
    const response = await fetch (`${baseUrl}/${userName}`)
    return await response.json()
}

export {getEvents}
