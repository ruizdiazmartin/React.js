import React, { Component } from 'react'
import Imagen from './Imagen'


export default class Resultado extends Component {

	mostrarImagenes = () => {
		const imagenes = this.props.imagenes

		if (imagenes.length === 0) return null;

		console.log(imagenes)

		return (
			<div>
				<div className="col-12 p-5 row">
					{imagenes.map(imagen => (
						<Imagen
							key={imagen.id}
							imagen={imagen}
						/>
					))}


				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.mostrarImagenes()}
			</div>
		)
	}
}


