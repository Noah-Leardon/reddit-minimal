import exp from "constants"
import { clear } from "./postSlice"
import postReducer from "./postSlice"
import { fetchPosts } from "./postSlice";

jest.mock('../../api/api', () => ({
    fetchPosts: {
      pending: jest.fn(),
      fulfilled: jest.fn(),
      rejected: jest.fn()
    }
  }));

describe('Post Slice', () => {
    describe('Action creators', () => {
        it('Returns the proper clear action object', () => {
            const expectedValue = { type: 'post/clear', payload: undefined }
            const actualValue = clear()
            expect(actualValue).toEqual(expectedValue)
        })
    })
    describe('Reducers', () => {
        it('Returns the current state if no action is given', () => {
            const state = []
            const nextState = postReducer(state, { type: null, payload: undefined })
            expect(nextState).toEqual(state)
        })
        it('Returns the current state if the action is not recognized', () => {
            const state = []
            const nextState = postReducer(state, { type: 'UNKNOWN', payload: undefined })
            expect(nextState).toEqual(state)
        })
        it('Clears the state array', () => {
            const state = [{ id: 1 }, { id: 2}, {id: 3}]
            const nextState = postReducer(state, { type: 'post/clear', payload: 3 })
            expect(nextState).toEqual([])
        })
    })
    describe('post slice extraReducers', () => {
        let initialState;
      
        beforeEach(() => {
          initialState = {
            posts: [],
            isLoading: false,
            hasError: false
          };
        });
      
        it('should handle fetchPosts.pending', () => {
          const nextState = postReducer(initialState, fetchPosts.pending());
          expect(nextState.isLoading).toEqual(true);
          expect(nextState.hasError).toEqual(false);
        });
      
        it('should handle fetchPosts.fulfilled', () => {
          const mockPayload = {
            data: {
              children: ['post1', 'post2']
            }
          };
          const nextState = postReducer(initialState, fetchPosts.fulfilled(mockPayload));
          expect(nextState.isLoading).toEqual(false);
          expect(nextState.hasError).toEqual(false);
          expect(nextState.posts).toEqual(mockPayload.data.children);
        });
      
        it('should handle fetchPosts.rejected', () => {
          const nextState = postReducer(initialState, fetchPosts.rejected());
          expect(nextState.isLoading).toEqual(false);
          expect(nextState.hasError).toEqual(true);
        });
      });
})