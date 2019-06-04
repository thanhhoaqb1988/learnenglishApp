import { createStore, combineReducers } from 'redux';
const defaultArrword =
    [
        { id: "1", en: 'action', vn: 'hanh dong', memorized: true, isshow: false },
        { id: '2', en: 'actor', vn: 'dien vien', memorized: true, isshow: false },
        { id: '3', en: 'activity', vn: 'hoat dong', memorized: false, isshow: false },
        { id: '4', en: 'ative', vn: 'chu dong', memorized: false, isshow: false },
        { id: '5', en: 'activity', vn: 'hoat dong', memorized: true, isshow: false },
        { id: '6', en: 'ative', vn: 'chu dong', memorized: false, isshow: false },
    ];

const isAddingReducer = (state = false, action) => {
    if (action.type === 'TOGLE_ISADDING') return !state;
    return state;
};
const filterReducer = (state = 'SHOW ALL', action) => {
    if (action.type === 'FILTE_SHOW ALL') return 'SHOW ALL'
    if (action.type === 'FILTE_MEMORIZED') return 'MEMMORIZED'
    if (action.type === 'FILTE_NEED PRACTICE') return 'NEED PRACTICE';
    return state;
};
const arrWordsReducer = (state = defaultArrword, action) => {
    if (action.type === 'MEMORIZED') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, memorized: !e.memorized };
        });
    }
    if (action.type === 'SHOW') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, isshow: !e.isshow };
        });
    }
    if (action.type === 'ADD_WORD') {
        return [{
            id: state.length + 1,
            en: action.enn,
            vn: action.vnn,
            memorized: false,
            isshow: false
        }].concat(state);
    }
    return state;
};

const reducer = combineReducers({
    filter: filterReducer,
    arrword: arrWordsReducer,
    isAdding: isAddingReducer
})
const store = createStore(reducer)
export default store;