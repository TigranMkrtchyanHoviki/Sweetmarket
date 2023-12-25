import { useEffect, useRef, useState } from "react";
import StoreStyles from "./style.module.css"
import { IoIosSearch } from "react-icons/io";
import { connect } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { makeSelect_item } from "../../store/Action";
import Spinner from "../spinner";
import Error from "../error";

const Store = ({ list_all_items, clickSound, Dispatc_select_item }) => {

    const [all_list, setAll_list] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [value, setValue] = useState("")
    const idRef = useRef()
    const cotegories = ["All", "SWEETS", "CUPCAKES", "CAKES", "DOUGNUTS"]


    useEffect(() => {
        setAll_list(list_all_items)
    }, [list_all_items])


    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])


    useEffect(() => {

        if (value !== "") {
            setIsLoading(true)
            idRef.current = setTimeout(() => {
                setAll_list(list_all_items.filter(item => {
                    if (!item.name.toLowerCase().includes(value.toLowerCase())) {
                        setIsError(true)
                    }
                    return item.name.toLowerCase().includes(value.toLowerCase())
                }))
                setIsLoading(false)
            }, 1000)

            return () => {
                clearTimeout(idRef.current)
            }
        }

        if (all_list.length === 0 && value)
            setIsError(false)

    }, [value])

    useEffect(() => {
        if (!all_list.length) {
            setValue("")
        }
    }, [all_list])


    const handlerSet_cotegories = (e) => {

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        if (e.target.innerHTML === "All") {
            setAll_list(list_all_items)
        } else if (e.target.innerHTML === "SWEETS") {
            setAll_list(list_all_items.filter(item => item.categoria.toUpperCase() === e.target.innerHTML.toUpperCase()))
        } else if (e.target.innerHTML === "CUPCAKES") {
            setAll_list(list_all_items.filter(item => item.categoria.toUpperCase() === e.target.innerHTML.toUpperCase()))
        } else if (e.target.innerHTML === "CAKES") {
            setAll_list(list_all_items.filter(item => item.categoria.toUpperCase() === e.target.innerHTML.toUpperCase()))
        } else if (e.target.innerHTML === "DOUGNUTS") {
            setAll_list(list_all_items.filter(item => item.categoria.toUpperCase() === e.target.innerHTML.toUpperCase()))
        }

        setValue("")

    }

    const setButton_Cotegories = () => {

        return cotegories.map((cotegoria, i) => {
            return <button
                onClick={handlerSet_cotegories}
                key={i}
            >{cotegoria}</button>
        })

    }

    return (

        <div className={`${StoreStyles.container}`} id="store">

            <div className={`${StoreStyles.inner_container}`}>

                <p className={`${StoreStyles.our_store}`}>
                    <span>our</span>
                    <span>Store</span>
                </p>

                <div className={`${StoreStyles.categories}`}>
                    {setButton_Cotegories()}
                </div>

                <div className={`${StoreStyles.search_container}`}>

                    <div className={`${StoreStyles.search_inner_container}`}>

                        <button>
                            <IoIosSearch className={`${StoreStyles.search_icon}`} />
                        </button>

                        <input
                            onChange={e => setValue(e.target.value)}
                            value={value}
                            type="text"
                            placeholder="item"
                        />

                    </div>

                </div>

            </div>



            <div className={`${StoreStyles.list_items_container}`}>

                {
                    all_list.length
                        ?
                        ""
                        :                        
                        <Error />

                }

                {

                    isLoading
                        ?
                        <Spinner />
                        :
                        all_list.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className={`${StoreStyles.item}`}
                                >

                                    <div className={`${StoreStyles.item_img_container}`}>
                                        <img src={require(`../../imgs/${item.url}.jpg`)} />

                                        <div
                                            onClick={() => {
                                                clickSound.play()
                                                Dispatc_select_item(item.id)
                                            }}
                                            className={`${StoreStyles.cart_container}`}>
                                            <FaCartShopping className={`${StoreStyles.cart}`} />
                                        </div>
                                    </div>

                                    <div className={`${StoreStyles.item_name_and_price}`}>
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                    </div>

                                </div>
                            )
                        })

                }

            </div>

        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        list_all_items: state.list_all_items,
        clickSound: state.clickSound
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Dispatc_select_item: (id) => dispatch(makeSelect_item(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)