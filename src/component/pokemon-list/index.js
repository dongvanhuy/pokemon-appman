import React, {Component} from 'react';
import { connect } from 'react-redux';
import PokemonItem from '../pokemon-item';
import {loadPokemon} from '../../actions';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.props.loadPokemon();
    }
    render() {
        const { dataPokemon } = this.props;
        return (
            <ul className="pokemon-list">
                {
                    dataPokemon.map((pokemon) => <PokemonItem data={pokemon} />)
                }
            </ul>
        )
    }
}


const mapStateToProps = state => ({
    dataPokemon: state.dataPokemonList.data,
});

const mapDispatchToProps = {
    loadPokemon,
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);