import React from 'react';
import UserContext from '../Context';
import { render } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Login from '../LogInComponent'


describe('LOGIN TESTS', () => {

    // SMOKE TEST 
    it('Login Component should render without crushing', ()=>{
        let currentUser = null;
        render(
            <UserContext.Provider value={{ currentUser }} >
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </UserContext.Provider>
        )
    }) 

    // SNAPSHOT TEST 
    it('', () => {
        let currentUser = null;
        const { asFragment } = render(
            <UserContext.Provider value={{ customElements}} >
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </UserContext.Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    })


    it('shows a login form', () => {
		let currentUser = null;
		const { getByText } = render(
			<UserContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</UserContext.Provider>
		);
		expect(getByText('Username')).toBeInTheDocument();
	});

});