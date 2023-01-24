import { makeAutoObservable } from 'mobx';

class AuthStore {
    message = '';
    authToken = '';

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    resetError() {
        this.message = '';
    }

    get errorMessage() {
        return this.message;
    }

    setError(newErrorMessage) {
        this.message = newErrorMessage;
    }

    setToken(newToken) {
        this.authToken = newToken;
    }

    get token() {
        return this.authToken;
    }
}

export { AuthStore };
