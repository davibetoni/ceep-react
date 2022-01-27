import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }
  createNote(title, text) {
    const novaNota = { title, text };
    const newNota = [...this.state.notas, novaNota]
    const newState = {
      notas:newNota
    }
    this.setState(newState);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
