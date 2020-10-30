export const initialState = {
    basket:[],
    user:null,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            console.log('action item : ', action.item);
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            console.log("action ID : ",action.id);
            const index = state.basket.findIndex(
                (basketItem)=>(basketItem.id===action.id)
            );
            console.log("Index : "+index);
            let newBasket = [...state.basket];
            
            if(index >=0)
            {
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Cant remove product (id:${action.id})
                as its not in the basket`);
            }
            console.log('old basket', state.basket);
            console.log('new basker', newBasket);
            return {
                ...state,
                basket:newBasket
            }

        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
};

export default reducer;