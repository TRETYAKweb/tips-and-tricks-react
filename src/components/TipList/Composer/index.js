// Core
import { useContext } from 'react';

// Components
import { observer } from 'mobx-react-lite';
import { Tip } from '../Tip';

// Hooks
import { useStore, useTips } from '../../../hooks';

// Helpers
import { fetchify } from '../../../helpers/fetchify';

export const TipList = observer(({ tipViewMode }) => {
    const { data, isFetched } = useTips();

    const { tagStore } = useStore();
    const { selectedById } = tagStore;

    let tips = data;

    if (tipViewMode === 'topic-by-tag' && Array.isArray(data)) {
        tips = data.filter((tip) => tip.tag.id === selectedById);
    }

    const tipsJSX = tips.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { fetchify(isFetched, tipsJSX) }
        </section>
    );
});
