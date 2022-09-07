import FileSaver from "file-saver";

export const constants = [
    "Arquitectos", 
    "Área", 
    "Superficie del terreno", 
    "Superficie Pileta", 
    "Orientación", 
    "Año", 
    "Barrio", 
    "Localidad", 
    "País"
]

export const FILE_PATH = 'assets/CV ARQ KRONEMBERGER NOELIA 2022 AGOSTO.pdf'

export const downloadCV = () => {
  FileSaver.saveAs(import.meta.env.BASE_URL + FILE_PATH, "CV_Noelia_Kronemberger.pdf")
}

export const scrollToSection = elementRef => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  })
}