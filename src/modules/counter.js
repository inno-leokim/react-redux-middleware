// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


// 액션 생성 함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

/**
 * thunk 함수. export 시킨다.
 */
// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
// Thunk 생성 함수
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
};


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