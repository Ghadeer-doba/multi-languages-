import { useTranslation} from "react-i18next";
import { ReactComponent as Logo } from './globe.svg';
const languages = [
  {code: 'fr',name: 'Français',country_code: 'fr',},
  {code: 'en',name: 'English',country_code: 'gb',},
  {code: 'ar',name: 'العربية',dir: 'rtl',country_code: 'ye',},
]



function App() {
  const { t,i18n } = useTranslation();
  
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);

    if (langCode === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  };

  
  return (
<div className="container">
<div className="d-flex justify-content-end align-items-center language-select-root mt-4  ">
<div className="dropdown">
  <button 
  className="btn btn-link dropdown-toggle " 
  type="button" data-bs-toggle="dropdown" 
  aria-expanded="false" 
  style={{ color: 'black' }}>
  <Logo  />
  </button>
  <ul className="dropdown-menu">
  {languages.map((lang)=>(
    <li key={lang.code}>

    <button 
    className="dropdown-item" 
    onClick={()=>changeLanguage(lang.code)}
   disabled={i18n.resolvedLanguage===lang.code}
    >
    <span key={lang.code} 
    className={`flag-icon flag-icon-${lang.country_code} mx-2`}
    style={{opacity:i18n.resolvedLanguage===lang.code?0.4:1}}
    >
    </span>
    {lang.name}
    </button>
    </li>
  ))}   
  </ul>
</div>
</div>
<div className="d-flex flex-column align-items-start mt-5">
<h2 className="font-weight-normal mb-3">{t('Welcome to React')}</h2>
<p >{t('Welcome to React')}</p>
<p className="p-1 col-md-6">{t('what is')}</p>
</div>

</div>
  );
}

export default App;
