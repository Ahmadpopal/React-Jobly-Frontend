import React from 'react';
import UserContext from '../Context';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../Profile';


describe('PROFILE TESTS', () => {
    // SMOKE TEST 
    it('Profile Component should render without crush', () => {
        let currentUser = {
			username   : 'test',
			first_name : 'test',
			last_name  : 'test',
			email      : 'test',
			logo_url   : 'test'
		};

        render(
			<UserContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Profile />
				</MemoryRouter>
			</UserContext.Provider>
		);
	});

    // SNAPSHOT TEST 
    it('matches snapshot', () => {
		let currentUser = {
			username   : 'test',
			first_name : 'test',
			last_name  : 'test',
			email      : 'test',
			logo_url   : 'test'
		};

		const { asFragment } = render(
			<UserContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Profile />
				</MemoryRouter>
			</UserContext.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});



    it('shows user Profile', () => {
		let currentUser = {
			username   : 'test',
			first_name : 'test',
			last_name  : 'test',
			email      : 'test'
		};

		const { getByText } = render(
			<UserContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Profile />
				</MemoryRouter>
			</UserContext.Provider>
		);
		expect(getByText('Profile')).toBeInTheDocument();
	});
})