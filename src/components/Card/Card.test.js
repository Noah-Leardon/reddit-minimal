import { screen, render } from "@testing-library/react";
import Card from "./Card";

beforeEach(() => {
    render(<Card />)
})

describe('Card component', () => {
    it('Renders without errors', () => {
        const card = screen.getByTestId('card')
        expect(card).toBeInTheDocument()
    })
    it('Renders a title', () => {
        const title = screen.getByRole('heading')
        expect(title).toBeInTheDocument()
    })
    it('Renders a vote counter', () => {
        const counter = screen.getByTestId('votes')
    })
    it('Renders a content div', () => {
        const body = screen.getByTestId('body')
        expect(body).toBeInTheDocument()
    })
    it('Renders the author div', () => {
        const author = screen.getByTestId('author')
        expect(author).toBeInTheDocument()
    })
    it('Renders the comment img', () => {
        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument()
    })
    it('Renders the comment total as a link', () => {
        const comments = screen.getByRole('link')
        expect(comments).toBeInTheDocument()
    })
    it('Renders the time posted', () => {
        const time = screen.getByTestId('time')
        expect(time).toBeInTheDocument()
    })
})