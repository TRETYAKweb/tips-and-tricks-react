// Core
import { combineReducers } from 'redux';

// Reducers
import {
    authReducer as auth,
    tagsReducer as tags,
    settingsReducer as settings,
    profileReducer as profile,
} from '../reducers';

export const rootReducer = combineReducers({
    auth,
    tags,
    settings,
    profile,
});
