import React, { useContext } from 'react';
import {render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '../HomePage'
import UserContext from '../Context';


// SMOKE TEST
    // - we create currentUser and set it to null 
    // - check if Home Page renders without Crushing 
test('HomePage Component should render without crushing', ()=> {
    let currentUser = null;

	render(
        <UserContext.Provider value={{ currentUser }}>
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        </UserContext.Provider>
    );
});


// SNAPSHOT TEST 

// IF USER IS NOT LOG IN 
it('matches snapshot', () => {
    let currentUser = null;

    const { asFragment } = render(
        <UserContext.Provider value={{ currentUser }}>
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        </UserContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

