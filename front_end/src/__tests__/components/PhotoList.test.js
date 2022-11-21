import '@testing-library/jest-dom'
import { renderWithClient } from "../utils";
import PhotoList from '../../components/PhotoList';
import photographerMock from '../../photographerMock.js';

describe('COMPONENT: Photo List', () => {
    it("Check that the photo list will render with mock photographer data after a search is run", async () => {
        const data = [photographerMock]
        const result = renderWithClient(<PhotoList photographers = { data } />)
        expect(await result.findByText(/Lorenzo Fay/i)).toBeInTheDocument()
    })
})
