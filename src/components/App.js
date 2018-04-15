import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import PlacarContainer from './PlacarContainer';

const dados = {
  partida: {
    estadio: "Estadio I",
    data: "14/04/2018",
    horario: "19h",
  },
  casa: {
    nome: "Time I",
  },
  visitante: {
    nome: "Time A",
  }
};

class App extends Component {
  render() {
    return (
      <div>
        {/* <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante} /> */}
        <PlacarContainer {...dados} clima={'nublado'} tempo={85} />
      </div>
    );
  }
}

export default App;
