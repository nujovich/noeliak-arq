import { useEffect, useState } from "react"

export const ScrollUp = () => {
    const [showButtonUp, setShowButtonUp] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 350) {
                setShowButtonUp(true)
            } else{
                setShowButtonUp(false)
            }
        })


    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <div>
            {
                showButtonUp && (
                    <button className="button-up" onClick={() => scrollToTop()}>
                        <span className="button-icon"><box-icon type='solid' name='chevrons-up'></box-icon></span>
                    </button>
                )
            }
        </div>
        
        
    )
}