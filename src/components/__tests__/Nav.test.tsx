// @ts-nocheck
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../lib/redux/init/store';
import { Nav } from '../Nav';


const init = () => {
    const { container } = render(
        <Router>
            <Provider store = { store }>
                <Nav />
            </Provider>
        </Router>,
    );

    return container;
};


describe('Nav', () => {
    it('should have 6 links', () => {
        const container = init();
        expect(container.querySelectorAll('a').length).toEqual(6);
    });

    it('should have link whith a href to all topics', () => {
        const container = init();
        expect(container.querySelectorAll('a')[ 0 ].href.includes('/all-topics')).toBeTruthy();
    });

    it('snapshot', () => {
        const container = init();

        expect(container).toMatchSnapshot();
    });
});
