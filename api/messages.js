// api/messages.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, subject, message } = req.body;
    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Логируем сообщение в консоль
    console.log('Received message:', { name, phone, email, subject, message });

    // Отправляем успешный ответ
    return res.status(200).json({ message: 'Message received successfully' });
  } else {
    // Если метод не POST, возвращаем ошибку
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
