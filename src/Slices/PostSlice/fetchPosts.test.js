// Inside your test file
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { fetchPosts } from './postSlice';
import { fetchData } from '../../api/api';
import { act } from 'react-dom/test-utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../api/api', () => ({
    fetchData: jest.fn().mockResolvedValue({ data: 'test'}),
  }));


describe('fetchPosts async thunk', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });
  it('dispatches pending, fulfilled actions', async () => {
    const store = mockStore({});
    const apiData = { searchPhrase: 'test', type: undefined, postId: undefined };


    require('../../api/api').fetchData.mockResolvedValue({
        status: 200,
        data: { posts: 'test' }
      });
    // Dispatch the async thunk
    require('../../api/api').fetchData.mockResolvedValue({
        json: () => Promise.resolve({ posts: 'test' })
    });
    
    await store.dispatch(fetchPosts(apiData));

    // Get dispatched actions
    const actions = store.getActions();

    // Verify the dispatched actions
    expect(actions[0].type).toEqual(fetchPosts.pending.type);
    expect(actions[1].type).toEqual(fetchPosts.fulfilled.type);
    expect(actions[1].payload).toEqual( {posts: 'test'});

    expect(fetchData).toHaveBeenCalledTimes(1);
  });
  it('Handles errors', async () => {
    const testData = { searchPhrase: 'test', type: undefined, postId: undefined };
    const store = mockStore({});

    // Mock a rejected API call
    const error = new Error('Failed to fetch data');
    jest.spyOn(require('../../api/api'), 'fetchData').mockRejectedValueOnce(error);

    // Dispatch the async thunk
    await store.dispatch(fetchPosts(testData));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchPosts.pending.type);
    expect(actions[1].type).toEqual(fetchPosts.rejected.type);
  })
});
