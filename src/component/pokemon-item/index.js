import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';
import { connect } from 'react-redux';
import iconHappy from '../../cute.png';
import {removePokedex} from '../../actions';


class PokemonItem extends Component {
    constructor(props) {
        super(props)
    }
    removePokemon = (pokemon) => {
        this.props.removePokedex(pokemon);
    }
    render() {
        const {data} = this.props;
        const arrIcon = [];
        for (let i=0;i<data.abilityCal.happiness;i++) {
            arrIcon.push(iconHappy);
        }
        return(
            <div className="pokemon-item">
                <img className="pokemon-item__avata" src={data.imageUrl} alt={data.name} />
                <div className="pokemon-item__info">
                    <p className="pokemon-item__name">{data.name}</p>
                    <div className="pokemon-item__abilities" >
                        HP: <ProgressBar now={data.abilityCal.hp} />
                        STR: <ProgressBar now={data.abilityCal.strength} />
                        Weak: <ProgressBar now={data.abilityCal.weakness} />
                    </div>
                    {arrIcon.map((icon) => <img height="20" width="20" src={icon} alt="happiness" /> )}
                </div>
                <span onClick={() => this.removePokemon(data)} className="pokemon-item__icon">X</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});


const mapDispatchToProps = {
    removePokedex,
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem);