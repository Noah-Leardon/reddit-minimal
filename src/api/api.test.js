import { fetchData } from './api'; // Import the fetchData function

describe('fetchData function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock function calls after each test
  });

  it('fetches data from the Reddit API', async () => {
    // Mock a successful response from the Reddit API
    const searchPhrase = 'test';
    const responseData = { data: 'test'};
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(responseData),
    });

    // Call the fetchData function
    const result = await fetchData(searchPhrase);

    // Verify that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(`https://www.reddit.com/search.json?q=${searchPhrase}&raw_json=1`);

    // Verify that the function returns the expected data
    expect(await result.json()).toEqual(responseData);
  });

  it('handles errors from the Reddit API', async () => {
    // Mock an error response from the Reddit API
    const searchPhrase = 'test';
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    // Call the fetchData function
    try {
      await fetchData(searchPhrase);
    } catch (error) {
      // Verify that the function throws the expected error
      expect(error.message).toBe('Failed to fetch Reddit data');
    }
  });

  it('handles fetch errors gracefully', async () => {
    // Mock a fetch error
    const searchPhrase = 'test';
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));

    // Call the fetchData function
    try {
      await fetchData(searchPhrase);
    } catch (error) {
      // Verify that the function logs the error
      expect(console.error).toHaveBeenCalledWith('Error:', error);
    }
  });
});
