import {FC, FormEvent, useState} from 'react';
import styles from './index.module.scss';
import {api} from '@shared/api';
import {IAddress} from '@app/types';

export interface ISearchAddressForm {
    setAddresses: (addresses: IAddress[]) => void,
}

export const SearchAddressForm: FC<ISearchAddressForm> = (props) => {
    const {setAddresses} = props;
    const [inputAddressValue, setInputAddressValue] = useState('');

    const searchHandler = async (evt: FormEvent) => {
        evt.preventDefault();
        setAddresses(await api.getAddress(inputAddressValue));

    };
    return (
        <form action="#" onSubmit={evt => searchHandler(evt)} className={styles.SearchAddressForm}>
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