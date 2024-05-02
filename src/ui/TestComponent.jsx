import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import SecondTest from "./SecondTest";

const TestComponent = () => {
  const { t, i18n } = useTranslation();


  return (
    <Suspense fallback="Cargando traducciones">
      <div>
        <Trans i18nKey="test.title"></Trans>

        <button className="border" onClick={()=> i18n.changeLanguage('es')}>Change</button>
        <button className="border" onClick={()=> i18n.changeLanguage('en')}>Cambiar</button>
        <hr />
      </div>
    </Suspense>
  );
};

export default TestComponent;
