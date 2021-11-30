const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: 0,
    isAdmin: false
}

function usuarioReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOG_IN':
            return{...state, usuarioLogado:1, usuarioEmail: action.usuarioEmail, isAdmin: action.isAdmin }
        case 'LOG_OUT':
            return {...state, usuarioLogado:0, usuarioEmail: null, isAdmin: false }
         default:
             return state
    }
}

export default usuarioReducer