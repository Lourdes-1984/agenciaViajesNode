import { Viaje } from "../models/Viaje.js"

const paginaInicio = (req, res) => {
    res.render('inicio' , {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => {
    res.render('nosotros' , {
        pagina: 'nosotros'
    })
}
const paginaViajes = async (req, res) => {
    //consultar BD
    const viajes = await Viaje.findAll()
    console.log(viajes);
    res.render('viajes' , {
        pagina: ' Proximos Viajes',
        viajes
    })
}
const paginaTestimoniales = (req, res) => {
    res.render('testimoniales' , {
        pagina: 'Testimoniales'
    })
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params

    try {
        const viaje = await Viaje.findOne({where : {slug}})

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje

}