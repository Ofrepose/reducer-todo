
export const initialState = [{
    item:'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const toDoReducer = (state,action) =>{

    switch(action.type){
        case 'add':

            return [...state,{item:action.payload.newToDoText, completed:false,id:Math.floor(Math.random()* 100000)}]
        case 'done':
            const dataDone = state.filter(item=>item.id===action.payload);
            dataDone[0].completed= !dataDone[0].completed;
            return state;
        case 'garbage':
            return state.filter(item=>item.completed === false);
        default:
            return state;

    }


}