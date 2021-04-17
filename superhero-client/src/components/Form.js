
import React from 'react'

class Form extends React.Component {
    state = {
        isValid: false,
        combat: 50,
        durability: 50,
        intelligence: 50,
        power: 50
    }

    componentDidMount() {
        const { combat, durability, intelligence, power } = this.props.hero.powerstats
        this.setState({ combat, durability, intelligence, power })
    }
    onFormSubmit = e => {

        const editedHero = {
            name: this.props.hero.name,
            _id: this.props.hero._id,
            image: {
                url:this.props.hero.image.url
            },
            powerstats: {
                combat: this.state.combat,
                durability: this.state.durability,
                intelligence: this.state.intelligence,
                power: this.state.power
            }
        }
        this.props.onHeroSave(editedHero)
    }
    render() {
        return (
                <div className="ui form edit-form">
                <div className="inline fields edit-form__items">
                    <div className="ten wide field ">
                        <label> COMBAT </label>
                        <input
                            value={this.state.combat}
                            type="number"
                            onChange={(e) => this.setState({ combat: e.target.value })}
                        />
                    </div>
                    <div className="ten wide field ">
                        <label> DURABILITY </label>
                        <input
                            value={this.state.durability}
                            type="number"
                            onChange={(e) => this.setState({ durability: e.target.value })}
                        />
                    </div>
                </div>
                <div className="inline fields edit-form__items">
                    <div className="ten wide field ">
                        <label> INTELLIGENCE </label>
                        <input
                            value={this.state.intelligence}
                            type="number"
                            onChange={(e) => this.setState({ intelligence: e.target.value })}
                        />
                    </div>
                    <div className="ten wide field ">
                        <label> POWER </label>
                        <input
                            value={this.state.power}
                            type="number"
                            onChange={(e) => this.setState({ power: e.target.value })}
                        />
                    </div>
                    </div>
                    <div className="ui inverted segment ">
                        <button onClick={this.onFormSubmit} className="ui green button massive" >Save</button>
                    </div>
                </div>
            
            )
    }
}

export default Form
