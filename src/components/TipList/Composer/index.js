// Components
import { Tip } from '../Tip';

// Hooks
import { useTips } from '../../../hooks';

// Helpers
import { fetchify } from '../../../helpers/fetchify';

export const TipList = () => {
    const { data, isFetched } = useTips();

    const tipsJSX = data.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { fetchify(isFetched, tipsJSX) }
        </section>
    );
};
