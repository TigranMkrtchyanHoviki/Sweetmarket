import HomeStyles from "./style.module.css"

const Home = () => {

    return (
        <div className={`${HomeStyles.home_container}`} id="home">

            <img src={require("../../imgs/cover_background.jpg")} />

            <div className={`${HomeStyles.backgrount_color}`}></div>

            <div className={`${HomeStyles.home_text_container}`}>
                
                <p className={`${HomeStyles.welcome_to}`}>
                    <span>Welcome To</span>
                    <span>Sweetmarket</span>
                </p>

                <div className={`${HomeStyles.explorer}`}>
                    <button>EXPLORE</button>
                </div>

            </div>

        </div>
    )
}

export default Home