import { InfoCards } from '../../components/InfoCards'
import './About.scss'
import { motion } from "motion/react";
import cv from "../../assets/cv.png";
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

const clipInSide = {
    hidden: {
        clipPath: "inset(0 100% 0 0)",
    },

    visible: {
        clipPath: "inset(0% 0 0 0)",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        }
    }
}


const infos = [
    {
        title: "Compétences",
        description:
            "Compétences acquises au cours de mes expériences en tant que développeur.",
        tags: ["React", "SCSS", "Git", "JS"],
    },
    {
        title: "Outils",
        description:
            "Les outils que j'utilise au quotidien pour développer mes projets.",
        tags: ["VS Code", "Claude", "GitHub"],
    },
    {
        title: "Expérience",
        description:
            "7 années d'expérience dans le développement front-end.",
        tags: ["Adot", "Veepee"],
    },
    {
        title: "Diplômes",
        description:
            "J'ai eu mon DUT MMI en 2018 puis mon bachelor Web à Hetic en 2019",
        tags: ["Bac+3"],
    },

];

export function About() {

    return <section id="about" className="about section">
        <motion.h1
            variants={clipIn}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "0px 0px -100px 0px",
            }}
            className='info__start'>À propos</motion.h1>
        {infos.map((info) => (
            <motion.div
                key={info.title}
                variants={clipInSide}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    margin: "0px 0px -100px 0px",
                }}>

                <InfoCards

                    title={info.title}
                    description={info.description}
                    tags={info.tags}
                />
            </motion.div>

        ))}
        <div className='info__link'>
            <a href={cv} target='_blank' rel="noopener noreferrer" className='info__cv'>Lien vers mon CV</a>
        </div>
    </section>
}