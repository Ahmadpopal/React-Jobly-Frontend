import React from 'react';
import UserContext from '../Context';
import { render } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import SignUp from '../SignUpFormComponent'


describe('SIGN UP TESTS', () => {

    // SMOKE TEST 
    it('SignUp Component should render without crushing', ()=>{
        let currentUser = null;
        render(
            <UserContext.Provider value={{ currentUser }} >
                <MemoryRouter>
                    <SignUp />
                </MemoryRouter>
            </UserContext.Provider>
        )
    }) 

    // SNAPSHOT TEST 
    it('snapshot should mataches', () => {
        let currentUser = null;
        const { asFragment } = render(
            <UserContext.Provider value={{ currentUser }} >
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        </UserContext.Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    })


    it('shows a signUp form', () => {
		let currentUser = null;
		const { getByText } = render(
			<UserContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<SignUp />
				</MemoryRouter>
			</UserContext.Provider>
		);
		expect(getByText('Register')).toBeInTheDocument();
	});

});