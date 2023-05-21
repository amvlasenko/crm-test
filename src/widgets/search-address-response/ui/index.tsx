import {FC} from 'react';
import {IAddress} from '@app/types';
import styles from './index.module.scss';

export interface ISearchAddressResponse {
    addressesLisl: IAddress[];
}

export const SearchAddressResponse: FC<ISearchAddressResponse> = (props) => {
    const {addressesLisl} = props;
    console.log(addressesLisl);
    return (
        <section className={styles.SearchAddressResponse}>
            <h2>Адреса</h2>
            <ul>
                {addressesLisl.map((address: IAddress) => {
                    return (
                        <li key={address.value}>
                            {
                                address.value
                            }
                        </li>
                    );
                })}
            </ul>
        </section>

    );
};