// Core
import { createContext, useState } from 'react';

export const Context = createContext(['', () => null]);

export const SelectedTagProvider = (props) => {
    const state = useState('ccff8343-eebb-48e4-9baf-c02825ebbf2d');

    return <Context.Provider value = { state }>
        { props.children }
    </Context.Provider>;
};
