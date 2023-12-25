export const SELECT_ITEM = "SELECT_ITEM"
export const FILTER_LIST = "FILTER_LIST"
export const CLEAR_CART = "CLEAR_CART"
export const ADD_COUNT_SELECTED_ITEM = "ADD_COUNT_SELECTED_ITEM"
export const REDUCE_COUNT_SELECTED_ITEM = "REDUCE_COUNT_SELECTED_ITEM"

export const makeSelect_item = (id) => {

    return {
        type: SELECT_ITEM,
        payloud: id,
    }

}

export const makeFilterd_list = (list) => {
    list = list.filter(item => item.selected)
    return {
        type: FILTER_LIST,
        payloud: list
    }
}

export const makeEraser_action = () => {
     return {
        type: CLEAR_CART
     }
}

export const makeAdd_count_selected_item = (id) => {
    return {
        type: ADD_COUNT_SELECTED_ITEM,
        payloud: id
    }
}

export const makeReduce_count_selected_item = (id) => {
    return {
        type: REDUCE_COUNT_SELECTED_ITEM,
        payloud: id
    }
}