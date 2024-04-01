import store from "./store"

describe('Store', () => {
    it('Clears the states correctly', () => {
        const clearAction = [{ type: 'comments/clear', payload: undefined }, { type: 'post/clear', payload: undefined }]
        store.dispatch(clearAction[0])
        store.dispatch(clearAction[1])
        const { comments, post } = store.getState()
        expect(comments).toEqual([])
        expect(post).toEqual([])
    })
})