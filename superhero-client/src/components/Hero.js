import React from 'react'

const Hero = ({ hero, onHeroSelect, onHeroDelete }) => {
    
    const { url } = hero.image
    return (
        <div  className="item hero">
            <img
                alt={hero.name}
                className="ui image hero__image"
                src={url}
                onClick={()=> onHeroSelect(hero)}
            />
            <div className="content" style={{padding:'8px'}} >
                <p onClick={() => onHeroSelect(hero)}>{hero.name}</p>
            </div>
            <div className="content">
                {hero.isFromBackend
                    ? <button
                            className="ui pink button tiny"
                            onClick={() => onHeroDelete(hero._id)}>
                            Delete
                        </button>
                        : ''
                }
            </div>

        </div>
    )
}

export default Hero
