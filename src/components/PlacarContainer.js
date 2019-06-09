import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';
import Partida from './Partida';
import './placarContainerStyle.css';

export default class PlacarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }

    render() {
        const { partida, casa, visitante } = this.props;

        return(
            <div className="placar-container">
                <div className="time-casa">
                    <h3>Casa</h3>
                    <Time 
                        // nome={this.props.casa.nome} 
                        nome={casa.nome} 
                        gols={this.state.gols_casa}
                        marcarGol={this.marcarGolCasa.bind(this)}
                    />
                </div>
                <div className="partida">
                    {/* <Partida 
                        estadio={this.props.partida.estadio} 
                        data={this.props.partida.data} 
                        horario={this.props.partida.horario}
                    /> */}
                    {/* spread operator {... Exemplo} */}
                    <Partida {...partida} clima={this.props.clima} tempo={this.props.tempo}/>
                </div>
                <div className="time-visitante">
                    <h3>Visitante</h3>
                    <Time 
                        // nome={this.props.visitante.nome} 
                        nome={visitante.nome} 
                        gols={this.state.gols_visitante}
                        marcarGol={this.marcarGolVisitante.bind(this)}
                    />
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}

PlacarContainer.propTypes = {
    clima: PropTypes.string,
    tempo: PropTypes.number.isRequired,
};

PlacarContainer.defaultProps = {
    clima: 'Ensolarado',
};

/**
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
 * 
 */