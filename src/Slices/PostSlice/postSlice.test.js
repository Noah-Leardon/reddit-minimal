import exp from "constants"
import { add, remove } from "./postSlice"
import postReducer from "./postSlice"


describe('Post Slice', () => {
    describe('Action creators', () => {
        it('Returns the proper add action object', () => {
            const expectedValue = { type: 'post/add', payload: undefined }
            const actualValue = add()
            expect(actualValue).toEqual(expectedValue)
        })
        it('Returns the proper remove action object', () => {
            const expectedValue = { type: 'post/remove', payload: undefined }
            const actualValue = remove()
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
        it('Removes an item from the state array', () => {
            const state = [{ id: 1 }, { id: 2}, {id: 3}]
            const nextState = postReducer(state, { type: 'post/remove', payload: 3 })
            expect(nextState).toEqual([{ id: 1 }, { id: 2}])
        })
    })
})