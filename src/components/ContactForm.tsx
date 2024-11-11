import Button from './Button';
import '../styles/contactForm.css';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
            placeholder="Seu melhor Email"
            required
          />
          <textarea 
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
            required
            rows={7}
          />
          <div className="button-wrapper">
            <Button text="Enviar" />
          </div>
        </form>
      </div>
    </section>
  );
}
