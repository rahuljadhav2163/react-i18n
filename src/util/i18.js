import language from "./lang.json"

const i18 = (keyword)=>{
    const lang = localStorage.getItem("lang")||"English";
return language[lang][keyword]
}
export default i18;