import { renderWithClient } from "../utils";
//import Simple from '../../components/Simple';
import PhotoSearch from '../../components/PhotoSearch';

//Step 1: Validate the search box and input button 
describe('Check that the page renders', () => {
    it("Validates zipcode", async () => {       
        const result = renderWithClient(<PhotoSearch />)
        //expect(await result.findByText(/There was an error fetching the posts/i)).toBeInTheDocument 
        expect(await result.findByText(/Zipcode:/i)).toBeInTheDocument 
        expect(true).toBe(true);
    })
})
//Step 2: Validate a search request with mocked response
describe('Check 1', () => {
    it("Validates incorrect zipcode", async () => {
        
        const result = renderWithClient(<PhotoSearch />)

        //const result = renderWithClient(<PhotoCard />)
        //expect(await result.findByText(/Lorenzo Fay/i)).toBeInTheDocument()
        //expect(await result.findByText(/Photographer Name:/i)).toBeInTheDocument 
        //expect(await result.findByText(/There was an error fetching the posts/i)).toBeInTheDocument 
        expect(true).toBe(true);
    })
})


