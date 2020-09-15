import React from 'react'
import Buscador from './componentes/Buscador'


class App extends React.Component {

	state = {
		termino: 'dd'
	}

	datosBusqueda = (termino) => {
		this.setState({ termino })
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
				{this.state.termino}
			</div>
		)
	}
}

export default App