import { add, clear } from "./commentsSlice"
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
})
