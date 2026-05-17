const api = import.meta.env.VITE_COUNTRY_API;

export default async function getCountry(id) {

    try {
        const fetched = await fetch(`${api}/${id}`);
        if (!fetched.ok) {
            throw new Error(`HTTP Error: ${fetched.status}`);
        }
        const result = await fetched.json();
        return result;
    } catch (error) {
        throw error;
    }

}
