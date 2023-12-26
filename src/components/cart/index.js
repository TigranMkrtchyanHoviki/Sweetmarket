import CartStyles from "./style.module.css"
import { connect } from "react-redux"
import { makeEraser_action } from "../../store/Action"
import { makeAdd_count_selected_item } from "../../store/Action"
import { makeReduce_count_selected_item } from "../../store/Action"
import PropTypes from "prop-types"

const Cart = ({
    selected_items_count,
    clickSound,
    Chackout,
    DispatchClear_all_selected_items,
    DispatchAdd_count_selected_item,
    DispatchReduce_count_selected_item
}) => {

    const handler_Chackout = () => {
        const answer = window.confirm("Are you sure you want to chackout ?")
        if (answer)
            Chackout()
    }

    return (
        <div className={`${CartStyles.container}`}>

            {
                selected_items_count.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={`${CartStyles.prop_selected_item_container}`}>

                            <div className={`${CartStyles.prop_selected_item_left}`}>

                                <div className={`${CartStyles.img_container}`}>
                                    <img src={require(`../../imgs/${item.url}.jpg`)} />
                                </div>

                                <div className={`${CartStyles.item_name_price_count}`}>
                                    <div>{item.name} item</div>
                                    <div>{item.selected_count} * ${item.price}</div>
                                </div>

                            </div>

                            <div className={`${CartStyles.prop_selected_item_right}`}>
                                <div onClick={() => {
                                    clickSound.play()
                                    DispatchReduce_count_selected_item(item.id)
                                    }}>
                                    <span>-</span>
                                </div>
                                <div>
                                    <span>{item.selected_count}</span>
                                </div>
                                <div onClick={() => {
                                    clickSound.play()
                                    DispatchAdd_count_selected_item(item.id)
                                    }}>
                                    <span>+</span>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

            <div className={`${CartStyles.total_container}`}>

                <span>Totla price</span>
                <span>${selected_items_count.reduce((aggr, item) => {
                    return aggr + item.selected_count * item.price
                }, 0)}</span>

            </div>

            <div className={`${CartStyles.clear_checkout_container}`}>

                <button onClick={() => DispatchClear_all_selected_items()}><span>CLEAR</span> <span>CART</span></button>
                <button onClick={handler_Chackout}><span>CHECKOUT</span></button>

            </div>

        </div>
    )
}

const mapStateToprops = (state) => {
    return {
        clickSound: state.clickSound
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DispatchClear_all_selected_items: () => dispatch(makeEraser_action()),
        DispatchAdd_count_selected_item: (id) => dispatch(makeAdd_count_selected_item(id)),
        DispatchReduce_count_selected_item: (id) => dispatch(makeReduce_count_selected_item(id))
    }
}

Cart.propTypes = {
    selected_items_count: PropTypes.array.isRequired,
    Chackout: PropTypes.func.isRequired,
    DispatchClear_all_selected_items: PropTypes.func.isRequired,
    DispatchAdd_count_selected_item: PropTypes.func.isRequired,
    DispatchReduce_count_selected_item: PropTypes.func.isRequired
}

Cart.deafultProps = {
    selected_items_count: [],
    clickSound: new Audio(require("../../sound/clickSound.mp3")),
    DispatchClear_all_selected_items(){},
    DispatchAdd_count_selected_item(){},
    DispatchReduce_count_selected_item(){}
}

export default connect(mapStateToprops, mapDispatchToProps)(Cart)