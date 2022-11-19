//TO DO: Set up Testing with React Query so Components can be tested. 
/*
This was blocking all components with an error. I just started using 
React Query about 4 weeks ago but have not used it at work and this was 
my first time using it in testing. I wish I had not used it for this project
because it affected my tests for the whole app. I am working through
the React Query Jest documentation. 
*/

//Tests 
//STEP 1: Test the app landing page 
//STEP 2: Test the Photo Search Area inputs and button 
//STEP 3: Test the Submit Button with mock request and response
//STEP 4: Test the Page with 2 mock cards displaying

import { renderWithClient } from "../utils";
//import Simple from '../../components/Simple';
import PhotoApp from '../../components/PhotoApp';

describe('COMPONENT: Check PhotoApp component before user search', () => {
    it("Looks for App to have loaded", async () => {       
        const result = renderWithClient(<PhotoApp />)
        expect(await result.findByText(/Posts/i)).toBeInTheDocument 
    })
})

