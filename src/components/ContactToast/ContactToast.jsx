import { motion, AnimatePresence } from "framer-motion";

export function ContactToast({ show, type = "success" }) {
    
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`contact-toast contact-toast--${type}`}
          initial={{
            opacity: 0,
            x: 50,
            y: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            x: 50,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          role="status"
        >
          <span className="contact-toast__icon">
            {type === "success" ? "✓" : "!"}
          </span>

          <div className="contact-toast__content">
            <span className="contact-toast__title">
              {type === "success"
                ? "Message envoyé"
                : "Erreur lors de l'envoi"}
            </span>

            <span className="contact-toast__message">
              {type === "success"
                ? "Merci ! Je vous répondrai rapidement."
                : "Une erreur est survenue. Veuillez réessayer."}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}