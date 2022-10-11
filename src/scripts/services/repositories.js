import {baseUrl} from '/src/scripts/variables.js'

async function repositories (userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos`)
    return await response.json()
}

export {repositories}
