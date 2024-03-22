
export async function fetchData(searchPhrase) {
  try {
    const response = await fetch(`https://www.reddit.com/search.json?q=${searchPhrase}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Reddit data');
    }
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}