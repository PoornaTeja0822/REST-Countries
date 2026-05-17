const api = import.meta.env.VITE_COUNTRIES_API;

export default async function getCountries() {

    try {
        const fetched = await fetch(`${api}?fields=name,cca3,capital,region,population,flags,subregion`);
        if (!fetched.ok) {
            throw new Error(`HTTP Error: ${fetched.status}`);
        }
        const result = await fetched.json();
        return result;
    } catch (error) {
        throw error;
    }

}
