import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const SecondTest = () => {
    const { t, i18n } = useTranslation()
  return (
    <Suspense fallback="Cargando traducciones">
        <div>
            <p>{ i18n.language }</p>
        </div>
    </Suspense>
  )
}

export default SecondTest