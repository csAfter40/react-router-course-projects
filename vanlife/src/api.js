export async function getVans(path) {
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