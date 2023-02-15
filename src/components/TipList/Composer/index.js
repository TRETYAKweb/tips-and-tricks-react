// Core
import { useSelector } from 'react-redux';

// Components
import { Tip } from '../Tip';

// Hooks
import { useTips } from '../../../hooks';

// Helpers
import { fetchify } from '../../../helpers/fetchify';

import { getSelectedTagId } from '../../../lib/redux/selectors';

export const TipList = ({ tipViewMode }) => {
    const { data, isFetched } = useTips();

    const selectedById = useSelector(getSelectedTagId);

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
};
