import {
    makeAutoObservable, makeObservable, observable, action,
} from 'mobx';

class SettingsStore {
    open = false;

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    toggleSettingsIsOpen(state) {
        this.open = state;
    }

    get isSettingsIsOpen() {
        return this.open;
    }
}

export { SettingsStore };
