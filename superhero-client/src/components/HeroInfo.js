import React from 'react'
import Form from './Form'

const HeroInfo = ({ hero, onHeroPatch, onHeroSave, onHeroEdit, showForm }) => {
    
    const displayForm = (hero) => {
        return (<Form hero={hero} onHeroPatch={onHeroPatch} onHeroSave={onHeroSave} />)
    }

    return (
        <div className="ui segment hero-detail__description ">
            <div className="ui icon header hero-detail__fly">
                <i className="studiovinari icon" style={{color:'red'}}>&nbsp;&nbsp;&nbsp;{hero.name.toUpperCase() }</i>
            </div>
            <br/>
            <div className="ui icon header">
                <i className="bolt icon shake">&nbsp;</i>
            </div>

            {showForm
                ? displayForm(hero)
                : <div className="ui list massive">
                    <div className="item">
                        <i className="icon ">COMBAT</i>
                        <div className="content">{ hero.powerstats.combat}</div>
                    </div>
                    <div className="item">
                        <i className="icon ">DURABILITY</i>
                        <div className="content">{hero.powerstats.durability }</div>
                    </div>
                    <div className="item">
                        <i className="icon">INTELLIGENCE</i>
                        <div className="content">{ hero.powerstats.intelligence}</div>
                    </div>
                    <div className="item">
                        <i className="icon">POWER</i>
                        <div className="content">{ hero.powerstats.power}</div>
                    </div>
                    <div className="ui inverted segment ">
                        {hero.isFromBackend
                            ? <button onClick={() => onHeroEdit(hero)} className="ui orange button massive ">Edit Power</button>
                            :<button onClick={() => onHeroSave(hero)} className="ui green button massive" >Save</button>
                         }
                    </div>
                </div>
                
            }
            
            
           
        </div>
    )
} 

export default HeroInfo
