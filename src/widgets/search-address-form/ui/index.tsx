import {FC, FormEvent, useState} from 'react';
import styles from './index.module.scss';
import {api} from '@shared/api';
import {IAddress} from '@app/types';
import {validateInputLength} from '../utils';

export interface ISearchAddressForm {
    setAddresses: (addresses: IAddress[]) => void,
}

export const SearchAddressForm: FC<ISearchAddressForm> = (props) => {
    const {setAddresses} = props;
    const [inputAddressValue, setInputAddressValue] = useState('');
    const MinInputLength = 3;

    const searchHandler = async (evt: FormEvent) => {
        evt.preventDefault();

        validateInputLength(inputAddressValue, MinInputLength) ?
            setAddresses(await api.getAddress(inputAddressValue)) :
            alert(`Минимальная длинна запроса ${MinInputLength} символа`);

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