import { renderWithClient } from "../utils";
import PhotoApp from '../../components/PhotoApp';

describe('COMPONENT: Check PhotoApp', () => {
    it("Looks for App to have loaded", async () => {       
        const result = renderWithClient(<PhotoApp />)
        expect(await result.findByText(/Posts/i)).toBeInTheDocument 
    })
})

