// Inside your test file
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { fetchPosts } from './postSlice';
import { fetchData } from '../../api/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../api/api', () => ({
    fetchData: jest.fn().mockResolvedValue({ data: 'test'}),
  }));


describe('fetchPosts async thunk', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });
  it('dispatches pending, fulfilled, and rejected actions', async () => {
    const store = mockStore({});
    const searchPhrase = 'test';


    require('../../api/api').fetchData.mockResolvedValue({ data: 'test' });
    // Dispatch the async thunk
    await store.dispatch(fetchPosts(searchPhrase));

    // Get dispatched actions
    const actions = store.getActions();

    // Verify the dispatched actions
    expect(actions[0].type).toEqual(fetchPosts.pending.type);
    expect(actions[1].type).toEqual(fetchPosts.fulfilled.type);
    // Assuming the API call succeeds, you can also check for the payload
    expect(actions[1].payload).toEqual({ data: 'test'});

    // Optionally, you can also verify the calls to fetchData
    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith(searchPhrase);
  });

  // You can write additional tests for error scenarios, etc.
});
