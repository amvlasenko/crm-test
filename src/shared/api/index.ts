import {IAddress} from '@app/types';

export const api = {
    getAddress: (query: string): Promise<IAddress[]> => {
        return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + process.env.API_KEY
            },
            body: JSON.stringify({query: query})
        })
            .then(response => response.json())
            .then(result => {
                /* Можно распарсить по макету и возвращать массив распаршеных объектов
                но так как это не прописано в ТЗ явно, то не стал тратить на это время,
                плюс запрос из макета все равно возвращает другой response (PixelPerfect этой
                части сделать не получится).
                */
                return result.suggestions;
            })
            .catch(error => console.log('error', error));
    }
};