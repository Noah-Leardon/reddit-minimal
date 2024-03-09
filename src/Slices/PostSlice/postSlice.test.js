import exp from "constants"
import { add, clear } from "./postSlice"
import postReducer from "./postSlice"


describe('Post Slice', () => {
    describe('Action creators', () => {
        it('Returns the proper add action object', () => {
            const expectedValue = { type: 'post/add', payload: undefined }
            const actualValue = add()
            expect(actualValue).toEqual(expectedValue)
        })
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
        it('Adds to the state', () => {
            const state = []
            const nextState = postReducer(state, { type: 'post/add', payload: 1 })
            expect(nextState).toEqual([1])
        })
        it('Clears the state array', () => {
            const state = [{ id: 1 }, { id: 2}, {id: 3}]
            const nextState = postReducer(state, { type: 'post/clear', payload: 3 })
            expect(nextState).toEqual([])
        })
    })
})