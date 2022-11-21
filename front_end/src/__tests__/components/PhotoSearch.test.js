import { renderWithClient } from "../utils";
import PhotoSearch from '../../components/PhotoSearch';

describe('COMPONENT: PhotoSearch', () => {
    it("Check that the search page renders before button click", async () => {       
        const result = renderWithClient(<PhotoSearch />)
        expect(await result.findByText(/Zipcode:/i)).toBeInTheDocument 
    })
})
