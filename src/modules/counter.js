// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


// 액션 생성 함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

const initialState = 0;

export default function counterReducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}