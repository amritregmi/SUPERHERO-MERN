import React from 'react'
import Header from './Header'
import superhero from '../api/superhero'
import myApi from '../api/myApi'
import SearchBar from './SearchBar'
import HeroList from './HeroList'
import HeroDetail from './HeroDetail'
  
class App extends React.Component{
    
    state = {

        heros: [], // comes from api
        selectedHero: null,
        savedHeros: [], // comes from Database,
        showForm: false,
        dataFound:true,
    }

    /**
     * @RUNS when the app is mounted 
     * Default serach text is 'Batman' 
     */
    componentDidMount() {
        this.onSearchSubmit('plantman')
        this.fetchHerosFromBackend()
    }
    // runs when the component is updated.
    componentDidUpdate(prevState) {
        if (this.state.savedHeros !== prevState.savedHeros) {
        }
    }
    changeStateOfDataFound = () => {
        this.setState({dataFound:true})
    }

    /**
     * @fetch heros from backend api 
     */
    async fetchHerosFromBackend() {
        const response = await myApi.get('/api/heros')
        this.setState({savedHeros:response.data.heros})
    }

    /**
     * @SAVES API hero into our database
     */
    onHeroSave = async (hero) => {
    
        // add Data to DB 
        const res = await myApi.post('api/heros',{
            body: hero
        })
        // get the saved data
        const newHero = await res.data.hero
        
        // update the UI 
        const oldState = this.state.savedHeros
        const updatedState = oldState.push(newHero)
        this.setState([...this.state.savedHeros, newHero])
    }

    /**
     * @UPDATES the Hero Data in backend
     */
    onHeroPatch = async (hero) => {
        console.log(hero);
        // find the hero from db 
        const res = await myApi.patch(`/api/heros/${hero._id}`, {
            body:hero
        })
        // get the updated Data 
        const updatedHero = await res.data.hero
        console.log(updatedHero);
        return

    }

    /**
     * @DELETES HERO FROM BACKEND API
    */
    onHeroDelete = async id => {
        
        // delete from the db 
        await myApi.delete(`api/heros/${id}`)
       
        //update the UI
        const updatedHero = this.state.savedHeros.filter(hero => {
            return hero._id !==id
        })
        this.setState({savedHeros:updatedHero})
    }

    /**
     * @EDITS the Power Stats in front end  
     */
    onHeroEdit = async hero => {
        this.setState({showForm:true})
    }
    
    /**
     * @THIS guy gets the serch text and makes api call to superhero api
     * @AFTER data is received, it is then added to the state system.
     * @BASED on this state system other components are rendered. 
     * @PARAM serch text
     */
    onSearchSubmit = async searchText => {

        try {
            const response = await superhero.get(`/search/${searchText}`)
            // console.log(response.data.results);
            if (response.data.results === undefined) {
                this.setState({ dataFound: false })
                return
            }
            this.setState(
                {
                    heros: response.data.results,
                    selectedHero: response.data.results[0],
                    searchText: searchText,
                    isLoadedFromApi: true,
                    dataFound:true
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @When the Hero is selected, it updates the state
     * @Based on the state, Hero is displayed.
     * @param Hero object 
     */
    onHeroSelect = hero => {
        this.setState({showForm:false})
        this.setState({ selectedHero: hero })
    }

    render() {
        return (
            <div className="ui container">
                <Header title='SuperHero App'/>
                <SearchBar onSearchSubmit={this.onSearchSubmit} dataFound={this.state.dataFound} changeStateOfDataFound={this.changeStateOfDataFound} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="twelve wide column">
                            <HeroDetail
                                hero={this.state.selectedHero}
                                onHeroSave={this.onHeroSave}
                                onHeroPatch={this.onHeroPatch}
                                onHeroEdit={this.onHeroEdit}
                                showForm={this.state.showForm}
                            />
                        </div>
                        
                        <div className="four wide column">
                            {/* TOP PART FROM API  */}
                            {this.state.heros
                                ? <HeroList
                                    heros={this.state.heros}
                                    onHeroSelect={this.onHeroSelect}
                                    isLoadedFromApi={this.isLoadedFromApi}
                                    savedHeros={this.state.savedHeros}
                                    onHeroDelete = {this.onHeroDelete}
                                />
                                : 'Record Not Found'
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App
