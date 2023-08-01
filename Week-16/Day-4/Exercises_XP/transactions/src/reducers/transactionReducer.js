
const reducer = (state, action) =>{
    //console.log('reducer state', state.list)

    switch(action.type){
        case 'INSERT':
            const newList = [...state.list, { ...action.payload, id: new Date().getTime() }];
            localStorage.setItem('transactions', JSON.stringify(newList));
            return {
                ...state,
                list: newList,
            };
            
        case 'UPDATE':
            const updatedList = state.list.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            localStorage.setItem('transactions', JSON.stringify(updatedList));
            return {
                ...state,
                list: updatedList,
                currentIndex: -1,
            };
        case 'DELETE':
            const filteredList = state.list.filter((transaction) => transaction.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(filteredList));
            return {
                ...state,
                list: filteredList,
                currentIndex: -1,
            };
        case 'UPDATE-INDEX':
            return {
                ...state,
                currentIndex: action.payload,
            };
        default :
            return state
    }
}

export {reducer}
