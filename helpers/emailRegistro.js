import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bf0218aab9d371",
      pass: "290e44fcb36da6"
    }
  });
  const { email, nombre, token } = datos;

  const info = await transport.sendMail({
    from: "Administrador de pacientes de veterinaria",
    to: email,
    subject: "Comprueba tu cuenta",
    text: "Comprueba tu cuenta",
    html: `<p>Hola: ${nombre}, comprueba tu cuenta</p>
    <p>Tu cuenta esta lista, solo debes comprobarla en el siguiente enlace: 
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a> </p>

    <p>Si no creaste esta cuenta puedes ignorar este mensaje</p>
    `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

export default emailRegistro;
