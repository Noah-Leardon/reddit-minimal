import { screen, render } from "@testing-library/react";
import Comment from "./Comment";

describe('Comment component', () => {
    it('Renders without error', () => {
        render(<Comment />)
        const comment = screen.getByTestId('comment')
        expect(comment).toBeInTheDocument()
    })
})