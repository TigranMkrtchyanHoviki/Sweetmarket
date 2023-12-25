import ErrorStyles from "./style.module.css"

const Error = () => {
    return (
          <div className={`${ErrorStyles.container}`}>

            <p><span>There is no item !</span> <span>Please try again</span></p>

          </div>
    )
}

export default Error