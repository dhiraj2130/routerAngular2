/**
 * Created by dhiraj.kumar on 28/11/2016.
 */
export const people = (state = [],action) => {
    switch(action.type){
        case "add_person":
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}