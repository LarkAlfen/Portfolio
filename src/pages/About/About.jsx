import { InfoCards } from '../../components/InfoCards'
import './About.scss'

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
        tags: ["VS Code", "ChatGPT", "GitHub"],
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
        <h1 className='info__start'>À propos</h1>
        {infos.map((info) => (
            <InfoCards
                key={info.title}
                title={info.title}
                description={info.description}
                tags={info.tags}
            />
        ))}
        <div className='info__link'>
            <a href="" className='info__cv'>Lien vers mon CV</a>
        </div>
    </section>
}