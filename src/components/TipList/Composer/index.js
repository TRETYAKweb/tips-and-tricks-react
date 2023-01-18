// Core
import { useContext } from 'react';

// Components
import { Tip } from '../Tip';

// Context
import { Context } from '../../../lib/selectedTagContext';

// Hooks
import { useTips } from '../../../hooks';

// Helpers
import { fetchify } from '../../../helpers/fetchify';

export const TipList = ({ tipViewMode }) => {
    const { data, isFetched } = useTips();
    const [selectedTagId] = useContext(Context);

    let tips = data;

    if (tipViewMode === 'topic-by-tag' && Array.isArray(data)) {
        tips = data.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { fetchify(isFetched, tipsJSX) }
        </section>
    );
};
