import { aboutTab } from "../../constants"
import { useTranslation } from "react-i18next"

const About = () => {
    const [t, i18n] = useTranslation()

  return (
    <div className="max-container my-10">
        <div className="flex flex-wrap gap-5 justify-around text-primary-text border-b-2 border-divider max-w-xl mx-auto">
            {
                aboutTab.map( (element, index) => (
                    <div key={index}>{t(element.link)}</div>
                ))
            }
        </div>
    </div>
  )
}

export default About