import { fetchData } from './api'; // Import the fetchData function

describe('fetchData function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock function calls after each test
  });

  describe('Post calls', () => {
    it('fetches data from the Reddit API for posts', async () => {
      // Mock a successful response from the Reddit API
      const data = { searchPhrase: 'test', type: 'post', sort: 'test', postId: null, subreddit: null };
      const responseData = { data: 'test'};
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(responseData),
      });
  
      // Call the fetchData function
      const result = await fetchData(data.searchPhrase, data.type, data.sort, data.postId, data.subreddit);
  
      // Verify that fetch was called with the correct URL
      expect(fetch).toHaveBeenCalledWith(`https://www.reddit.com/search.json?q=${data.searchPhrase}&sort=${data.sort}&raw_json=1`);
  
      // Verify that the function returns the expected data
      expect(await result.json()).toEqual(responseData);
    });
    it('Handles comment fetch errors', async () => {
      // Mock a fetch error
      const data = { searchPhrase: 'test', type: 'post', postId: 'test', subreddit: 'test' };
      global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));
  
      // Call the fetchData function
      try {
        await fetchData(data.searchPhrase, data.type, data.postId, data.subreddit);
      } catch (error) {
        // Verify that the function logs the error
        expect(console.error).toHaveBeenCalledWith('Error:', error);
      }
    })
    it('handles errors from the Reddit API for posts', async () => {
      // Mock an error response from the Reddit API
      const data = { searchPhrase: 'test', type: 'post', postId: null, subreddit: 'test' };
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });
  
      // Call the fetchData function
      try {
        await fetchData(data.searchPhrase, data.type, data.postId, data.subreddit);
      } catch (error) {
        // Verify that the function throws the expected error
        expect(error.message).toBe('Failed to fetch Reddit post data');
      }
    });
  })
  
  describe('Comment calls', () => {
    it('fetches data from the Reddit API for comments', async () => {
      // Mock a successful response from the Reddit API
      const data = { searchPhrase: 'test', type: 'comment', sort: 'test', postId: 'test', subreddit: null };
      const responseData = { data: 'test'};
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(responseData),
      });
  
      // Call the fetchData function
      const result = await fetchData(data.searchPhrase, data.type, data.sort, data.postId, data.subreddit);
  
      // Verify that fetch was called with the correct URL
      expect(fetch).toHaveBeenCalledWith(`https://www.reddit.com/comments/${data.postId}.json`);
  
      // Verify that the function returns the expected data
      expect(await result.json()).toEqual(responseData);
    });
    it('Handles comment fetch errors', async () => {
      // Mock a fetch error
      const data = { searchPhrase: 'test', type: 'comment', sort: 'test', postId: 'test', subreddit: 'test' };
      global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));
  
      // Call the fetchData function
      try {
        await fetchData(data.searchPhrase, data.type, data.sort, data.postId, data.subreddit);
      } catch (error) {
        // Verify that the function logs the error
        expect(console.error).toHaveBeenCalledWith('Error:', error);
      }
    })
    it('handles errors from the Reddit API for comments', async () => {
      // Mock an error response from the Reddit API
      const data = { searchPhrase: 'test', type: 'comment', sort: 'test', postId: null, subreddit: 'test' };
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });
  
      // Call the fetchData function
      try {
        await fetchData(data.searchPhrase, data.type, data.sort, data.postId, data.subreddit);
      } catch (error) {
        // Verify that the function throws the expected error
        expect(error.message).toBe('Failed to fetch Reddit comment data');
      }
    });
  })
  
  describe('Subreddit calls', () => {
    it('fetches data from the Reddit API for subreddits', async () => {
      // Mock a successful response from the Reddit API
      const data = { searchPhrase: 'test', type: 'subreddit', sort: 'test', postId: 'test', subreddit: 'test' };
      const responseData = { data: 'test'};
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(responseData),
      });
  
      // Call the fetchData function
      const result = await fetchData(data.searchPhrase, data.type, data.sort, data.postId, data.subreddit);
  
      // Verify that fetch was called with the correct URL
      expect(fetch).toHaveBeenCalledWith(`https://www.reddit.com/r/${data.subreddit}.json?raw_json=1`);
  
      // Verify that the function returns the expected data
      expect(await result.json()).toEqual(responseData);
    });
    it('Handles subreddit fetch errors', async () => {
      // Mock a fetch error
      const data = { searchPhrase: 'test', type: 'subreddit', postId: null, subreddit: 'test' };
      global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));
  
      // Call the fetchData function
      try {
        await fetchData(data.searchPhrase, data.type, data.postId, data.subreddit);
      } catch (error) {
        // Verify that the function logs the error
        expect(console.error).toHaveBeenCalledWith('Error:', error);
      }
    })
    it('handles errors from the Reddit API for subreddits', async () => {
      // Mock an error response from the Reddit API
      const data = { searchPhrase: 'test', type: 'subreddit', postId: null, subreddit: 'test' };
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });
  
      // Call the fetchData function
      try {
        await fetchData(data.searchPhrase, data.type, data.postId, data.subreddit);
      } catch (error) {
        // Verify that the function throws the expected error
        expect(error.message).toBe('Failed to fetch Reddit subreddit data');
      }
    });
  })
  it('Returns null if no type is specified', async () => {
    // Mock a successful response from the Reddit API
    const data = { searchPhrase: 'test', type: null, postId: 'test', subreddit: 'test' };
    const responseData = { data: 'test'};
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(responseData),
    });

    // Call the fetchData function
    const result = await fetchData(data.searchPhrase, data.type, data.postId, data.subreddit);
    // Verify that the function returns the expected data
    expect(result).toEqual(undefined);
  })
});
