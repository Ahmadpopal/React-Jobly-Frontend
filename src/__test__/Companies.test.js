import React from 'react';
import { render } from '@testing-library/react';

import { MemoryRouter, Route } from 'react-router-dom';
import Companies from '../Companies';

describe('COMPANIES TEST', () => {
	it('Companies Component should render without crashing', () => {
		render(
			<MemoryRouter initialEntries={[ '/companies/' ]}>
				<Route exact path="/companies/">
					<Companies />
				</Route>
			</MemoryRouter>
		);
	});

	it('Companies Snapshot should matches', () => {
		const { asFragment } = render(
			<MemoryRouter initialEntries={[ '/companies/' ]}>
				<Route exact path="/companies/">
					<Companies />
				</Route>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});