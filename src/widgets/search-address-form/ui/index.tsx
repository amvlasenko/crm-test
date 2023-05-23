import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import {IAddress} from '@app/types';
import {getWithValidate} from '../utils';

export interface ISearchAddressForm {
    setAddresses: (addresses: IAddress[]) => void,
}

export const SearchAddressForm: FC<ISearchAddressForm> = (props) => {
    const {setAddresses} = props;
    const [inputAddressValue, setInputAddressValue] = useState('');
    const MinInputLength = 3;

    const clickHandler = async (evt: React.FormEvent) => {
        evt.preventDefault();
        return await getWithValidate(inputAddressValue, MinInputLength, setAddresses);
    };
    
    return (
        <form action="#" onSubmit={evt => clickHandler(evt)} className={styles.SearchAddressForm}>
            <label>
                Введите интересующий вас адрес
                <br/>
                <input
                    type="text" placeholder="Введите интересующий вас адрес"
                    value={inputAddressValue}
                    onChange={evt => setInputAddressValue(evt.target.value)}/>
            </label>
            <button type="submit">Поиск</button>
        </form>
    );

};