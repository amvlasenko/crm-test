import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.scss';
import {useLocation} from 'react-router-dom';

export interface IMenu {
    inHeader?: boolean;
}

export const Menu: FC<IMenu> = (props) => {
    const {inHeader = false} = props;
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const {pathname} = useLocation();

    const settingsButtonClickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
        return setIsSettingsOpen((prev) => !prev);
    };
    const settingsButtonKeydownHandler = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        return (evt.key === 'Enter' || evt.key === ' ') && setIsSettingsOpen((prev) => !prev);
    };

    return (
        <nav className={[styles.Menu, inHeader && styles.inHeader].join(' ')}>
            <span className={styles.description}>Меню</span>
            <ul>
                <li className={pathname === '/' ? styles.current : undefined}>
                    <Link to="/">
                        <div className={styles.home}></div>
                        Главная
                    </Link>
                </li>
                <li className={pathname === '/address' ? styles.current : undefined}>
                    <Link to="address">
                        <div className={styles.search}></div>
                        Поиск адресов
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div className={styles.tables}></div>
                        Таблицы
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div className={styles.calendar}></div>
                        Календарь
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div className={styles.maps}></div>
                        Карты
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div className={styles.widgets}></div>
                        Виджеты
                    </Link>
                </li>
                <li>
                    <div tabIndex={0}
                         className={[styles.btn, styles.arrow, isSettingsOpen && styles.open].join(' ')}
                         onClick={evt => settingsButtonClickHandler(evt)}
                         onKeyDown={evt => settingsButtonKeydownHandler(evt)}
                    >
                        <div className={styles.settings}></div>
                        Настройки
                    </div>
                    {isSettingsOpen && (
                        <ul className={styles.nested}>
                            <li>
                                <Link to="#">
                                    <div className={styles.profile}></div>
                                    Настройки профиля
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className={styles.financials}></div>
                                    Управление финансами
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                {inHeader &&
                    <li>
                        <Link to="#">
                            <div className={styles.user}></div>
                            Имя Фамилия
                        </Link>
                    </li>
                }
                <li>
                    <div tabIndex={0} className={styles.btn}>
                        <div className={styles.exit}></div>
                        Выход
                    </div>
                </li>
            </ul>
        </nav>
    );
};
