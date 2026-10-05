import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { motion } from "motion/react";

import { ContactToast } from "../../components/ContactToast/ContactToast";

import "./Contact.scss";
import "../../components/ContactToast/ContactToast.scss";


const clipIn = {
    hidden: {
        clipPath: "inset(100% 0 0 0)",
    },

    visible: {
        clipPath: "inset(0% 0 0 0)",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        }
    }
}


export function Contact() {
    const [state, handleSubmit] = useForm("mwlpowpw");

    const [toast, setToast] = useState({
        show: false,
        type: "success",
    });

    useEffect(() => {
        if (!state.succeeded) return;

        setToast({
            show: true,
            type: "success",
        });

        const timeout = setTimeout(() => {
            setToast((current) => ({
                ...current,
                show: false,
            }));
        }, 4000);

        return () => clearTimeout(timeout);
    }, [state.succeeded]);

    return (
        <>
            <section className="contact" id="contact">
                <motion.h1
                    variants={clipIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "0px 0px -100px 0px",
                    }}
                    className='contact__title'>Contact</motion.h1>
                <motion.form
                    variants={clipIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "0px 0px -100px 0px",
                    }}
                    className="contact__form" onSubmit={handleSubmit}>
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
                </motion.form>
            </section>

            <ContactToast
                show={toast.show}
                type={toast.type}
            />
        </>
    );
}