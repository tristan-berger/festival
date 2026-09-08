export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique d'envoi de formulaire à ajouter plus tard
  };

  return (
    <section>
      <h1>Contactez-nous</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="nom@exemple.com"
            required
          />
        </div>

        <div>
          <label htmlFor="subject">Objet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Votre message ici..."
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}