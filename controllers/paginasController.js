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
        pagina: 'Viajes',
        viajes
    })
}
const paginaTestimoniales = (req, res) => {
    res.render('testimoniales' , {
        pagina: 'testimoniles'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales

}