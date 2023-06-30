// import { sleep } from "./utils"

export async function getVans(path) {
    // await sleep(2000)
    const res = await fetch(path)
    if (!res.ok) {
        throw {
            message: "Error getting vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: data.statusText,
            status: res.status
        }
    }

    return data
}