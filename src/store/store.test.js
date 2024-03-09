import store from "./store"

describe('Store', () => {
    it('Handles post actions correctly', () => {
        const action = { type: 'post/add', payload: 1}
        store.dispatch(action)
        const { post } = store.getState()
        expect(post).toEqual([1])
    })
    it('Handles comments actions correctly', () => {
        const commentsAction = { type: 'comments/add', payload: 'test'}
        store.dispatch(commentsAction)
        const { comments } = store.getState()
        expect(comments).toEqual(['test'])
    })
    it('Clears the states correctly', () => {
        const clearAction = [{ type: 'comments/clear', payload: undefined }, { type: 'post/clear', payload: undefined }]
        store.dispatch(clearAction[0])
        store.dispatch(clearAction[1])
        const { comments, post } = store.getState()
        expect(comments).toEqual([])
        expect(post).toEqual([])
    })
})