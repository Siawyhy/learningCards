// const initialState = {
//     cards: [],
//     cardsLoadingStatus: 'idle',
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'CARDS_FETCHING':
//             return {
//                 ...state,
//                 cardsLoadingStatus: 'loading'
//             }
//         case 'CARDS_FETCHED':
//             return {
//                 ...state,
//                 cards: action.payload,
//                 cardsLoadingStatus: 'idle'
//             }
//         case 'CARDS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 cardsLoadingStatus: 'error'
//             }
//         default: return state 
//     }
// }

// export default reducer