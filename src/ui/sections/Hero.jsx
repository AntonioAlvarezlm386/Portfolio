import { useTranslation } from "react-i18next"
import { profile } from '../../assets/index.js'


const Hero = () => {
    const [t, i18n] = useTranslation()
  return (
    <div className="max-container border flex pt-10">
        <div className="">
            <h1>{t("heroText.h1Line1")}</h1>
            <h1>{t("heroText.h1Line2")}
            <span className="ml-2">{t("heroText.span")}</span>
            </h1>
            <h2>{t("heroText.subtitle")}</h2>
            <p>{t("heroText.description")}</p>
        </div>
        <div className="flex justify-center items-center p-40 bg-hero-pattern bg-center">
            <img src={profile} alt="" className="w-64"/>
        </div>
    </div>
  )
}

export default Hero