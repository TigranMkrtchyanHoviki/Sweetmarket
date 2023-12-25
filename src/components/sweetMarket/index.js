import Header from "../header"
import Home from "../home"
import About from "../about"
import Store from "../store"
import SweetStyles from "./style.module.css"
import { FaCircleArrowUp } from "react-icons/fa6";
import { useState } from "react"

const SweetMarket = () => {

    const [cliced_arrow_activ_home, setCliced_arrow_activ_home] = useState(0)

    const handler_Go_to_up_of_website = () => {
        setCliced_arrow_activ_home(cliced_arrow_activ_home + 1)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={`${SweetStyles.sweet_container}`}>
             <Header cliced_arrow_activ_home={cliced_arrow_activ_home}/>
             <Home />
             <About />
             <Store />
             <FaCircleArrowUp 
                             onClick={handler_Go_to_up_of_website}
                             className={`${SweetStyles.go_to_up_of_page}`} 
            />
        </div>
    )
}

export default SweetMarket