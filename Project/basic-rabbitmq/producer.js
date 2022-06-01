const amqplib = require('amqplib');

const init = async () => {
  const connection = await amqplib.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'dicoding';
  const message = 'Selamat belajar message broker!';

  await channel.assertQueue(queue, {
    durable: true,
  });

  await channel.sendToQueue(queue, Buffer.from(message));
  console.log('Pesan berhasil dikirim!');

  // Best practice: close connection after use and give 1 second
  setTimeout(() => {
    connection.close();
  }, 1000);
}

init();