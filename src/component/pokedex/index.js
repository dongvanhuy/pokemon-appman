import React, {Component} from 'react';
import { connect } from 'react-redux';
import PokemonItem from '../pokemon-item';
import PokemonList from '../pokemon-list';

class Pokedex extends Component {
    constructor(props) {
        super(props);
    }
    removePokemon = (e) => {
        this.props.removePokedex(e);
    }
    render() {
        const {pokedex} = this.props;
        console.log(pokedex);
        return (
            <React.Fragment>
                <ul className="pokemon-list">
                    {
                        pokedex.map((pokemon) => <PokemonItem data={pokemon} removePokemon={this.removePokemon}/>)
                    }
                </ul>
                <PokemonList />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokedex: state.dataPokedex.data,
    };
};


export default connect(mapStateToProps)(Pokedex);