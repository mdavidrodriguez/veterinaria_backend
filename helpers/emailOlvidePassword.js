import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
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
    subject: "Restablece tu password",
    text: "Restablece tu password",
    html: `<p>Hola: ${nombre}, has solicitado restablecer tu password</p>
    <p>Sigue al siguiente enlace para generar un nuevo password: 
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> </p>

    <p>Si no creaste esta cuenta puedes ignorar este mensaje</p>
    `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

export default emailOlvidePassword;
