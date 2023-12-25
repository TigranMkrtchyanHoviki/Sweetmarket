import { useState } from "react"
import AboutStyles from "./style.module.css"


const About = () => {

    const [animate, setAnimate] = useState(false)
    const [fixed, setFixed] = useState(false)

    const handlerAnimate = () => {
        if(animate)
           setAnimate(false)
        else
           setAnimate(true)
    }

    const handlerFix_Animate = () => {
        setAnimate(false)
        setFixed(true)
    }

    const handlerCancel_Fixe_Animate = () => {
        setFixed(false)
    }

    return (
        <div className={`${AboutStyles.about_container}`} id="about">

            <div className={`${AboutStyles.about_about_us_container}`}>

                <p className={`${AboutStyles.about_us}`}>
                    <span>About</span>
                    <span>Us</span>
                </p>

                <p className={`${AboutStyles.about_us_text}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat consequatur, ea, assumenda, corrupti optio
                    quos inventore ullam commodi accusantium quibusdam earum dignissimos cupiditate eligendi iusto. Cumque dignissimos
                    soluta veniam!
                </p>

                <div className={`${AboutStyles.about_explorer}`}>
                    <button onClick={handlerAnimate}>EXPLORE</button>
                </div>

            </div>

            <div className={`${AboutStyles.about_img_container}`}>
                <div 
                     onMouseEnter={handlerFix_Animate}
                     onMouseLeave={handlerCancel_Fixe_Animate}
                     className={`${AboutStyles.about_img}`}>

                    <img src={require("../../imgs/about.jpg")} />
                    <div className={`${AboutStyles.about_img_border} ${animate ? AboutStyles.animation : ""} ${fixed ? AboutStyles.fix : ""}`}></div>

                </div>
            </div>

        </div>
    )
}

export default About