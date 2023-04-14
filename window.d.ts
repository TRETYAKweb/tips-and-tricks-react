import { compose } from 'redux';

declare global {
    // eslint-desable-next-line @typescript-eslint/naming-convention
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
