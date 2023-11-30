import User from '../models/user.model.js';
import ResetToken from '../models/resetToken.model.js';
import { EMAIL_ADDRESS, EMAIL_PASSWORD, FRONTEND_URL } from '../config.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export const forgotPassword = async (req, res) => {
	const { email } = req.body;

	if (email == '') {
		return res.status(400).json({ msg: 'El email es requerido' });
	}

	try {
		const userFound = await User.findOne({ email });

		if (!userFound) {
			return res.status(404).json({ msg: 'Email no encontrado' });
		}

		// Elimina el token, si  este ya existe
		let token = await ResetToken.findOne({ idUser: userFound._id });
		if (token) {
			await token.deleteOne();
		}

		// Create token
		let resetToken = crypto.randomBytes(32).toString('hex') + userFound._id;

		await new ResetToken({
			idUser: userFound._id,
			token: resetToken,
		}).save();
		// const token = jwt.sign({ id: userFound.id, used: false }, TOKEN_SECRET, { expiresIn: '1h' });
		// userFound.updateOne({ tokenResetPassword: token });

		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: `${EMAIL_ADDRESS}`,
				pass: `${EMAIL_PASSWORD}`,
			},
		});

		const message = `
			<table cellspacing="0" cellpadding="0" border="0" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;max-width:544px;margin-right:auto;margin-left:auto;width:100%!important;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji!important">
				<tr>
					<td align="center">
						<table cellspacing="0" cellpadding="0" border="0" align="center">
							<tr>
								<td align="center" style="padding: 12px; color: #24292e;">
									<img src="https://github.com/JuanDiego-Arenas/saga/blob/main/public/img/logo_green_2023.png?raw=true" alt="SAGA logo" style="max-width: 4rem; pointer-events: none;" class="CToWUd" data-bit="iit"><h2>Restablece tu contraseña de SAGA</h2>
								</td>
							</tr>
						</table>
						<table cellspacing="0" cellpadding="0" border="0" align="center" width="80%"
							style="border-radius: 12px; border: 1px solid #e1e4e8; margin-top: 8px; color: #24292e;">
							<tr>
								<td align="center" style="padding: 16px;">
									<h3 style="margin-bottom: 16px;">SAGA password reset</h3><p style="text-align: start; margin-bottom: 8px;">Hola <strong>${userFound.username}</strong>, has perdido tu contraseña de SAGA. Lo sentimos.</p><p style="text-align: start; margin-bottom: 16px;">Pero no te preocupes. Puedes utilizar el siguiente botón para restablecer tu contraseña:</p><br><a href="${FRONTEND_URL}/password_reset/${resetToken}" target="_blank" style="margin: 16px; padding: 8px 24px; font-size: 16px; background-color: #34c22f; color: #fff; border: none; border-radius: .4rem; cursor: pointer; text-decoration: none;">Restablece tu contraseña</a><br><br><p style="text-align: start; word-break: break-all; margin: 16px 0 16px 0;">Si no utilizas este enlace en un plazo de 1 horas, caducará. Para obtener un nuevo enlace de restablecimiento de contraseña, visita:<a href="${FRONTEND_URL}/forgot_password"style="text-decoration: none;">https://saga.com/forgot_password</a></p>
									<p style="text-align: start; margin-bottom: 16px;">Gracias,<br>El equipo de SAGA</p>
								</td>
							</tr>
						</table>
						<table cellspacing="0" cellpadding="0" border="0" align="center" width="75%" style="color: #6c757d; text-align: center; margin-top: 20px;">
							<tr>
								<td style="padding: 0 20px;">
									<p>Estás recibiendo este correo electrónico porque se ha solicitado el restablecimiento de la contraseña de tu cuenta.</p>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		`;

		const mailOptions = {
			from: EMAIL_ADDRESS,
			to: userFound.email,
			subject: 'Enlace de recuperación de contraseña',
			html: message,
		};

		transport.sendMail(mailOptions, (error, response) => {
			if (error) {
				console.error('Ha ocurrido un error:', error);
				res.status(500).json({ msg: 'Algo salió mal al momento de enviar el correo' });
			} else {
				res.status(200).json({ msg: 'El email para la recuperación ha sido enviado' });
			}
		});
		return token;
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: error.message });
	}
};
