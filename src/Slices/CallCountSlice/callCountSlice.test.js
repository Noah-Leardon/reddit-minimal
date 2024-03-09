import exp from "constants"
import { increment, clear } from "./callCountSlice"
import callCountReducer from "./callCountSlice"


describe('Call Count Slice', () => {
    describe('Action creators', () => {
        it('Returns the proper increment action object', () => {
            const expectedValue = { type: 'callCount/increment', payload: undefined }
            const actualValue = increment()
            expect(actualValue).toEqual(expectedValue)
        })
        it('Returns the proper clear action object', () => {
            const expectedValue = { type: 'callCount/clear', payload: undefined }
            const actualValue = clear()
            expect(actualValue).toEqual(expectedValue)
        })
    })
    describe('Reducers', () => {
        it('Returns the current state if no action is given', () => {
            const state = 0
            const nextState = callCountReducer(state, { type: null, payload: undefined })
            expect(nextState).toEqual(state)
        })
        it('Returns the current state if the action is not recognized', () => {
            const state = 0
            const nextState = callCountReducer(state, { type: 'UNKNOWN', payload: undefined })
            expect(nextState).toEqual(state)
        })
        it('Increments the state', () => {
            const state = 0
            const nextState = callCountReducer(state, { type: 'callCount/increment', payload: undefined })
            expect(nextState).toEqual(1)
        })
        it('Clears the state to 0', () => {
            const state = 3
            const nextState = callCountReducer(state, { type: 'callCount/clear', payload: undefined })
            expect(nextState).toEqual(0)
        })
    })
})