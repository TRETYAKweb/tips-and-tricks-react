import { makeAutoObservable } from 'mobx';

class TagStore {
    tagId = null;
    tagName = '';

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
        this.rootStore = rootStore;
    }

    setSelectedById(nextTag) {
        this.tagId = nextTag;
    }

    setSelectedByName(tagName) {
        this.tagName = tagName;
    }

    get selectedById() {
        return this.tagId;
    }

    get selectedByName() {
        return this.tagName;
    }
}

export { TagStore };
