import { useState } from 'react';
import Button from './Button';
import { sendEmail } from '../services/api';
import '../styles/contactForm.css';

export default function ContactForm() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await sendEmail(email, message);
      if (response.ok) {
        setEmail('');
        setMessage('');
        alert('E-mail enviado com sucesso!');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao enviar e-mail. Tente novamente mais tarde.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="desktop-only highlight-text">
          Envie sua dúvida
        </p>
        <h2>Entre em contato</h2>
        <p className="description">
          Nossa equipe está pronta para responder qualquer dúvida, orçamento ou questão técnica sobre nossos produtos 😊
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor Email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
            required
            rows={4}
          />
          <div className="button-wrapper">
            <Button text="Enviar" />
          </div>
        </form>
      </div>
    </section>
  );
}


