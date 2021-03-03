import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        images: [],
        loading: true
    });
    
    // Solo se ejecuta cuando la categoría cambia
    useEffect(()=>{
        setTimeout(() => {
            getGifs(category).then(imgs => setstate({
                images: imgs,
                loading: false
            }));
        }, 1000);
    }, [category])


    return state;
}
