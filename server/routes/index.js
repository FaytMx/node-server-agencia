const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

/**Controladores */
const nosotrosController = require('../controllers/nosotrosControlller');
const homeController = require('../controllers/homeController');
const viajesControllers = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {
    router.get('/',homeController.consultasHomepage );

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes',viajesControllers.mostrarViajes);

    router.get('/viajes/:id', viajesControllers.mostrarViaje);

    router.get('/testimoniales',testimonialesController.mostrarTestimoniales );

    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
};