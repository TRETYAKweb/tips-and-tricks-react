export const getToken = (state) => {
    return state.auth.token;
};

export const getErrorMessage = (state) => {
    return state.auth.errorMessage;
};

export const getProfileState = (state) => {
    return state.profile;
};
