import { useForm } from '@formspree/react';
import './Contact.scss'

export function Contact() {
    const [state, handleSubmit] = useForm("mwlpowpw");
    return (
        <section className="contact" id="contact">
            <h1 className='contact__title'>Contact</h1>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                    <label className="contact__field-label" htmlFor="name">
                        Nom
                    </label>

                    <input
                        className="contact__input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="contact__field">
                    <label className="contact__field-label" htmlFor="email">
                        Email
                    </label>

                    <input
                        className="contact__input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="votre@email.com"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="contact__field">
                    <label className="contact__field-label" htmlFor="subject">
                        Sujet
                    </label>

                    <input
                        className="contact__input"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Sujet"
                        required
                    />
                </div>

                <div className="contact__field">
                    <label className="contact__field-label" htmlFor="message">
                        Message
                    </label>

                    <textarea
                        className="contact__textarea"
                        id="message"
                        name="message"
                        placeholder="Votre message"
                        rows="6"
                        required
                    />
                </div>
                <button
                    className="contact__submit"
                    type="submit"
                    disabled={state.submitting}
                >
                    {state.submitting ? "Envoi..." : "Envoyer le message"}

                    <span
                        className="contact__submit-arrow"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </button>
            </form>
        </section>
    );
}