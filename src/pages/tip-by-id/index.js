import { Nav } from '../../components';
import { RecentTipsAside, TagsAsaide, TipView } from '../../features/tip-by-id';


export const TipByIdPage = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <section className = 'tip-view-layout'>
                <TipView />
                <section className = 'asides'>
                    <RecentTipsAside />
                    <TagsAsaide />
                </section>
            </section>
        </section>
    );
};
