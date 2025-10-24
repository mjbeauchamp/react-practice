import React from 'react'
import { FavoriteAnimalContext } from '../../App'

export default function FavoriteAnimal () {
    const {favoriteAnimal, setFavoriteAnimal} = React.useContext(FavoriteAnimalContext)

    return (
        <section>
            {favoriteAnimal ? 
                <div>
                    <h2>Favorite Animal</h2>
                    <p>{favoriteAnimal}</p>
                </div> :
                null
            }
            

            <label htmlFor="updateFavorite">Update favorite animal:</label>
            <input 
                id="updateFavorite" 
                type="text" 
                required 
                onChange={(e) => setFavoriteAnimal(e.target.value)} 
                value={favoriteAnimal}
            />
        </section>
    )

}