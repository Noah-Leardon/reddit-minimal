import { clear, fetchComments } from "./commentsSlice"
import commentsReducer from "./commentsSlice"

describe('Comments Slice', () => {
    describe('Action creators', () => {
        it('Returns the proper remove action object', () => {
            const expectedValue = { type: 'comments/clear', payload: undefined }
            const actualValue = clear()
            expect(actualValue).toEqual(expectedValue)
        })
    })
    describe('Reducers', () => {
        it('Returns the current state if no action is given', () => {
            const state = []
            const nextState = commentsReducer(state, { type: null, payload: undefined })
            expect(nextState).toEqual(state)
        })
        it('Returns the current state if the action is not recognized', () => {
            const state = []
            const nextState = commentsReducer(state, { type: 'UNKNOWN', payload: undefined })
            expect(nextState).toEqual(state)
        })
        it('Clears the state array', () => {
            const state = [{ id: 1 }, { id: 2}, {id: 3}]
            const nextState = commentsReducer(state, { type: 'comments/clear', payload: 3 })
            expect(nextState).toEqual([])
        })
    })
    describe('Comment slice extraReducers', () => {
        let initialState;
      
        beforeEach(() => {
          initialState = {
            comments: [],
            postId: undefined,
            isLoading: false,
            hasError: false
          };
        });
      
        it('should handle fetchComments.pending', () => {
          const nextState = commentsReducer(initialState, fetchComments.pending());
          expect(nextState.isLoading).toEqual(true);
          expect(nextState.hasError).toEqual(false);
        });
      
        it('should handle fetchComments.fulfilled', () => {
            const mockPayload = ['test', { data: { children: ['comment1', 'comment2'] } }];
            const mockMeta = { arg: { postId: 'test' } };
            const mockAction = {
                type: fetchComments.fulfilled.type,
                payload: mockPayload,
                meta: mockMeta
            };
    
            const nextState = commentsReducer(initialState, mockAction);
        
            // Assert that the reducer updates the state correctly
            expect(nextState.isLoading).toEqual(false);
            expect(nextState.hasError).toEqual(false);
            expect(nextState.comments).toEqual(['comment1', 'comment2']);
            expect(nextState.postId).toEqual('test');
        });
      
        it('should handle fetchComments.rejected', () => {
          const nextState = commentsReducer(initialState, fetchComments.rejected());
          expect(nextState.isLoading).toEqual(false);
          expect(nextState.hasError).toEqual(true);
        });
      });
})
