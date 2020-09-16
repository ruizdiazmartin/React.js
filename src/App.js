import React from 'react'
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado'


class App extends React.Component {

	state = {
		termino: '',
		imagenes: []
	}

	consultarApi = () => {

		const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}`

		fetch(url)
			.then(respuesta => respuesta.json())
			.then(resultado => this.setState({ imagenes: resultado.hits }))
	}

	datosBusqueda = (termino) => {
		this.setState({
			termino
		}, () => {
			this.consultarApi()
		})
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<p className="lead text-center">Buscador de Imagenes</p>
					<Buscador
						datosBusqueda={this.datosBusqueda}
					/>
				</div>
				<Resultado
					imagenes={this.state.imagenes}
				/>
			</div>
		)
	}
}

export default App