import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Digimon']);

    return (
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>
        <ol>
            {
                categories.map(category=> {
                    return <GifGrid key={category} category = {category}/>
                })
            }
        </ol>

        </>
    )
}
