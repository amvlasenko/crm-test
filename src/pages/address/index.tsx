import {FC, useState} from 'react';
import styles from './index.module.scss';
import {SearchAddressForm} from '@widgets/search-address-form';
import {SearchAddressResponse} from '@widgets/search-address-response';
import {IAddress} from '@app/types';

export const AddressPage: FC = () => {
    const [addresses, setAddresses] = useState<IAddress[]>([]);
    return (
        <section className={styles.AddressPage}>
            <h1>Поиск адресов</h1>
            <SearchAddressForm setAddresses={setAddresses}/>
            {addresses.length > 0 && <SearchAddressResponse addressesLisl={addresses}/>}
        </section>
    );
};