import {FC, useEffect, useState} from 'react';
import './styles/index.scss';
import styles from './index.module.scss';
import {withProviders} from '@app/providers';
import {Header} from '@widgets/header';
import {Menu} from '@widgets/menu';
import {Routing} from '@pages/index';

const App: FC = () => {
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsTablet(true);
        } else if (window.innerWidth > 768) {
            setIsTablet(false);
        }
        return resizeSubscriber();
    }, []);

    // TODO: Вынести в отдельный хук (useMatchMedia)
    const resizeSubscriber = () => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                setIsTablet(true);
            } else if (window.innerWidth > 768) {
                setIsTablet(false);
            }
        });
        return () => window.removeEventListener('resize', () => console.log('resizeSubscriber removed'));
    };
    return (
        <>
            <Header isTablet={isTablet}/>
            <main className={styles.appContent}>
                <Menu/>
                <Routing/>
            </main>
        </>
    );
};

export default withProviders(App);