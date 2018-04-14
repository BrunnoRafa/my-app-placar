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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante} />
      </div>
    );
  }
}

export default App;
