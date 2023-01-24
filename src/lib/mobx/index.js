import { makeAutoObservable } from 'mobx';
import { AuthStore } from './authStore';
import { SettingsStore } from './settingsStore';
import { TagStore } from './tagStore';

export class RootStore {
    settingsStore = null;
    tagStore = null;
    authStore = null;

    constructor() {
        makeAutoObservable(this);
        this.settingsStore = new SettingsStore(this);
        this.tagStore = new TagStore(this);
        this.authStore = new AuthStore(this);
    }
}

