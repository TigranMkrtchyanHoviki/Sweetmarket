import SpinnerStyles from "./style.module.css"

const Spinner = () => {
    return (
        <div className={`${SpinnerStyles.container}`}>
                <div className={`${SpinnerStyles.spinner}`}></div>
        </div>
    )
}

export default Spinner