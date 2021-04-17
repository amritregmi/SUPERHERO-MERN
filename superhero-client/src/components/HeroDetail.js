import React from 'react'
import HeroInfo from './HeroInfo'
/**
 * @IS Left side Hero Detail Page
 * @RESPONSIBLE to render the detail page
 */
const HeroDetail = ({ hero, onHeroPatch, onHeroSave, onHeroEdit, showForm }) => {
    if (!hero) {
        return <div>Hero not selected</div> 
    }
    return (
        <div className="item hero-detail">
            <div className="ui segment hero-detail__image">
                <img
                    className="ui image"
                    alt={hero.name}
                    src={hero.image.url}
                />
            </div>

            <HeroInfo
                hero={hero}
                onHeroSave={onHeroSave}
                onHeroEdit={onHeroEdit}
                showForm={showForm}
                onHeroPatch = {onHeroPatch}
            />
        </div>
    )
}

export default HeroDetail
