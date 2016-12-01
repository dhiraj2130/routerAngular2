/**
 * Created by dhiraj.kumar on 30/11/2016.
 */
const SECOND = 'second';
export const clock =(state = new Date(),{type}) => {
    const date = new Date(state.getTime());
    switch(type){
        case SECOND :
            date.setSeconds(date.getSeconds() +5);
            return date
        default :
            return state;

    }
}
