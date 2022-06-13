const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music Api',
      to: targetEmail,
      subject: 'Ekspor Playlists',
      text: 'Terlampir hasil dari ekspor playlists',
      attachments: [{
        filename: 'playlists.json',
        content,
      }],
    };

    console.log(message);
    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
