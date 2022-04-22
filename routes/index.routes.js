const router = require("express").Router()

const transporter = require("../config/mailing.config");


router.get("/", (req, res, next) => {
  res.render("index");
})

router.get('/contacto', (req, res) => res.render('pages/contact'))

router.post('/contacto', (req, res) => {

  const { email, subject, message, name } = req.body

  transporter.sendMail({
    from: name + ' <yabadu@project.com>',
    to: email,
    subject,
    text: 'Estamos en clase aprendiendo a enviar correos hoy, este es el mensaje: ' + message,
    html: '<p>Estamos en clase aprendiendo <b>a enviar correos</b> y este es el mensaje: ' + message + '</p>'
  })
    .then(info => res.send(info))
    .catch(error => console.log(error))

})

module.exports = router;
