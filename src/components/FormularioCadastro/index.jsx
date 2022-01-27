import React, { Component } from "react";
import "./styles.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _handleCreateNote(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.createNote(this.titulo, this.texto);
  }
  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={this._handleCreateNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
