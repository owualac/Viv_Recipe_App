
const API_KEY = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
    if (!API_KEY) {
        throw new Error("API_KEY not found");
    }

    const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
    const url = new URL(baseURL);

    const queryParams = {
        apiKey: API_KEY,
        query: searchTerm,
        number: String(10),
        offset: String((page - 1) * 10),
    };

    url.search = new URLSearchParams(queryParams).toString();

    try {
        const searchResponse = await fetch(url.toString());

        const resultsJson = await searchResponse.json();

        
        return resultsJson;
    } catch (error) {
       
        console.error(error);
    }
};

