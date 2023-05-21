import {FC, useState} from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';
import {Menu} from '@widgets/menu';

export interface IHeader {
    isTablet: boolean,
}

export const Header: FC<IHeader> = (props) => {
    const {isTablet} = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className={styles.Header}>
            <Link to="/" className={styles.logo}>
                Wrench CRM
            </Link>
            {isTablet
                ? <>

                    {isOpen
                        ? <>
                            <button onClick={evt => setIsOpen(false)} className={styles.close}>Закрыть</button>
                            <Menu inHeader={true}/>
                        </>
                        : <button onClick={evt => setIsOpen(true)} className={styles.open}>Открыть</button>
                    }

                </>
                : <Link to="#" className={styles.user}>Имя Фамилия</Link>
            }
        </header>
    );
};