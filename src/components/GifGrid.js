import React from 'react'
import {GifGridItem} from '../components/GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}

            <div className="card-grid">
                {
                    images.map(img=>{
                        return <GifGridItem key={img.id} img={img}/>
                        // return <GifGridItem  key={img.id} img={img}/>
                    })
                }
            </div>
        </>
    )
}
