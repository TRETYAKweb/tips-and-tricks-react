// Components
import { Tip } from '../Tip';

// Mock

import tips from '../../../mock-data/tips.json';

export const TipList = () => {
    const tipsJSX = tips.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { tipsJSX }
        </section>
    );
};
