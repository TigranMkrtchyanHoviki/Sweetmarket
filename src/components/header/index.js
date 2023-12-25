
import { FaPhoneFlip } from "react-icons/fa6";
import HeaderStyles from "./style.module.css"
import { FaCartShopping } from "react-icons/fa6";
import { connect } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import Cart from "../cart";
import { Link } from "react-scroll";


const Header = ({ list_all_items, cliced_arrow_activ_home }) => {


    const [selected_items_count, setSelectedItem_counts] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [active_home, setActive_home] = useState(false)
    const [active_about, setActive_about] = useState(false)
    const [active_store, setActive_store] = useState(false)

    const handlerShow_or_hide_cart = () => {
        if (showCart)
            setShowCart(false)
        else
            setShowCart(true)
        }


    useEffect(() => {
          if(!active_home)
             setActive_home(true)
             setActive_about(false)
             setActive_store(false)
    }, [cliced_arrow_activ_home])


    const handleSetActive = (e) => {
          if(e.target.innerHTML === "Home"){
            setActive_home(true)
            setActive_about(false)
            setActive_store(false)
          }else if(e.target.innerHTML === "About") {
            setActive_home(false)
            setActive_about(true)
            setActive_store(false)
          }else {
            setActive_home(false)
            setActive_about(false)
            setActive_store(true)
          }
             
    };

    const Chackout = () => {
        setShowCart(false)
    }

    useEffect(() => {
        setSelectedItem_counts(list_all_items.filter(item => item.selected))
    }, [list_all_items])

    return (
        <header className={`${HeaderStyles.header}`}>

            <div className={`${HeaderStyles.header_container}`}>

                <div className={`${HeaderStyles.header_logo_container}`}>
                    <img src={require("../../imgs/logo.png")} />
                </div>

                <nav>
                    <ul>

                        <li>
                            <Link
                                onClick={handleSetActive}
                                className={`${active_home && HeaderStyles.active}`}
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={0}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleSetActive}
                                className={`${active_about && HeaderStyles.active}`}
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={0}
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleSetActive}
                                className={`${active_store && HeaderStyles.active}`}
                                to="store"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={0}
                            >Store</Link>
                        </li>

                    </ul>
                </nav>

                <div className={`${HeaderStyles.header_contact}`}>
                    <FaPhoneFlip className={`${HeaderStyles.phone_icon}`} />
                    <span>+123 456 789</span>
                </div>

                <div className={`${HeaderStyles.header_cart_container}`}>
                    <button onClick={handlerShow_or_hide_cart}>
                        <FaCartShopping className={`${HeaderStyles.cart}`} />
                        <span>{selected_items_count.length ? `${selected_items_count.length} items` : "Cart"}</span>
                        <span>
                            {
                                selected_items_count.length
                                    ?
                                    ` - $${selected_items_count.reduce((aggr, item) => {
                                        return aggr + item.price * item.selected_count
                                    }, 0)}`
                                    :
                                    ""
                            }
                        </span>
                    </button>
                </div>

                {
                    showCart && <Cart
                        Chackout={Chackout}
                        selected_items_count={selected_items_count}
                    />
                }


            </div>

        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        list_all_items: state.list_all_items,
    }
}

export default connect(mapStateToProps, null)(Header)