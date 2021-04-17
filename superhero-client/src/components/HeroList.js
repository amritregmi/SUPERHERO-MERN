import React from 'react'
import Hero from './Hero'

/**
 * @Responsible to display list of heros
 * @Uses Hero component 
 */
const HeroList = ({ heros, savedHeros, onHeroDelete, onHeroSelect, isLoadedFromApi }) => { 
    const renderedList = heros.map(hero => {
        return ( 
            <Hero
                key={hero.id}
                hero={hero}
                onHeroSelect={onHeroSelect}
                isLoadedFromApi={isLoadedFromApi}
            />
        )
    })
    const renderedSavedList = savedHeros.map(hero => {
        return ( 
            <Hero
                key={hero._id}
                hero={hero}
                onHeroSelect={onHeroSelect}
                isLoadedFromApi={isLoadedFromApi}
                onHeroDelete = {onHeroDelete}
            />
        )
    })
    return (
        <div>
            <div className="ui relaxed divided list hero-list">
                <h2>Found Heros - {heros.length}</h2>
                {renderedList}
            </div>
            <div className="ui divider"></div>
            <div className="ui relaxed divided list hero-list">
                <h2>My Saved Heros - {savedHeros.length}</h2>
                {renderedSavedList}
            </div>
        </div>
        
    )
}

export default HeroList
