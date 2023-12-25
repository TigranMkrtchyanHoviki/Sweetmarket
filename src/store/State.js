import src from "../sound/clickSound.mp3"

export const state = {

    list_all_items: [

        {id: 0, name: "cake", url: "cake_0", categoria: "cakes", price: 10, selected: false, selected_count: 0},
        {id: 1, name: "cake", url: "cake_1", categoria: "cakes", price: 10, selected: false, selected_count: 0},
        {id: 2, name: "cake", url: "cake_2", categoria: "cakes", price: 10, selected: false, selected_count: 0},
        {id: 3, name: "cupcake", url: "cupcake_0", categoria: "cupcakes", price: 5, selected: false, selected_count: 0},
        {id: 4, name: "cupcake", url: "cupcake_1", categoria: "cupcakes", price: 5, selected: false, selected_count: 0},
        {id: 5, name: "cupcake", url: "cupcake_2", categoria: "cupcakes", price: 5, selected: false, selected_count: 0},
        {id: 6, name: "dougnut", url: "dougnuts_0", categoria: "dougnuts", price: 20, selected: false, selected_count: 0},
        {id: 7, name: "dougnut", url: "dougnuts_1", categoria: "dougnuts", price: 20, selected: false, selected_count: 0},
        {id: 8, name: "dougnut", url: "dougnuts_2", categoria: "dougnuts", price: 20, selected: false, selected_count: 0},
        {id: 9, name: "sweet", url: "sweet_0", categoria: "sweets", price: 30, selected: false, selected_count: 0},
        {id: 10, name: "sweet", url: "sweet_1", categoria: "sweets", price: 30, selected: false, selected_count: 0},
        {id: 11, name: "sweet", url: "sweet_2", categoria: "sweets", price: 30, selected: false, selected_count: 0},
        
    ],

    clickSound: new Audio(src)
    
}