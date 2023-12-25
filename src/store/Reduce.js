import { state as initialState } from "./State"

import { SELECT_ITEM } from "./Action"
import { CLEAR_CART } from "./Action"
import { ADD_COUNT_SELECTED_ITEM } from "./Action"
import { REDUCE_COUNT_SELECTED_ITEM } from "./Action"


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_ITEM:
            return {
                ...state,
                list_all_items: state.list_all_items.map(item => {
                    if(item.id === action.payloud)
                    return {
                         ...item,
                         selected: true,
                         selected_count: item.selected_count + 1
                    }
                    return item
                })
            }

            case CLEAR_CART:
                return {
                    ...state,
                    list_all_items: state.list_all_items.map(item => {
                        return {
                            ...item,
                            selected: false,
                            selected_count: 0
                        }
                    })
                }

            case ADD_COUNT_SELECTED_ITEM:
                return {
                    ...state,
                    list_all_items: state.list_all_items.map(item => {
                        if(item.id === action.payloud)
                           return {
                        ...item,
                        selected_count: item.selected_count + 1
                        }
                        return item
                    })
                }

            case REDUCE_COUNT_SELECTED_ITEM:
                return {
                    ...state,
                    list_all_items: state.list_all_items.map(item => {
                        if(item.id === action.payloud) {
                            if(item.selected_count === 1) {
                                return {
                                    ...item,
                                    selected_count: 0,
                                    selected: false
                                }
                            }else {
                                return {
                                    ...item,
                                    selected_count: item.selected_count - 1
                                }
                            }
                        }else {
                            return item
                        }
                    })
                }
        default:
            return state
    }
    
}