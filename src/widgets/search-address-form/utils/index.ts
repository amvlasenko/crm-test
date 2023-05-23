import {api} from '@shared/api';
import {IAddress} from '@app/types';

export const validateInputLength = (input: string, minLength: number): boolean => {
    return input.length >= minLength;
};

export const getWithValidate = async (query: string, condition: number, cb: (addresses: IAddress[]) => void) => {
    if (validateInputLength(query, condition)) {
        return cb(await api.getAddress(query));
    } else {
        return alert(`Минимальная длинна запроса ${condition} символа`);
    }
};