
export async function fetchData(searchPhrase, type, postId) {
  if (type === 'comment') {
    try {
      const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch Reddit data');
      }
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    try {
      const response = await fetch(`https://www.reddit.com/search.json?q=${searchPhrase}&raw_json=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch Reddit data');
      }
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
}

// https://www.reddit.com/comments/{postId}.json