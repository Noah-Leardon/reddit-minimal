
export async function fetchData(searchPhrase, type, sort, postId, subreddit) {
  switch (type) {
    case 'comment':
      try {
        const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch Reddit comment data');
        }
        return response;
      } catch (error) {
        console.error('Error:', error);
      }
      break;
    case 'post':
      try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchPhrase}&sort=${sort}&raw_json=1`);
        if (!response.ok) {
          throw new Error('Failed to fetch Reddit post data');
        }
        return response;
      } catch (error) {
        console.error('Error:', error);
      }
      break;
    case 'subreddit':
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/new.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch Reddit subreddit data');
        }
        return response;
      } catch (error) {
        console.error('Error:', error);
      }
      break;
    default:
      return undefined
  }
}

