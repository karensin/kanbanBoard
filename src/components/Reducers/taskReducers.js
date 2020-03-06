
const initialState = {
  0: ['Task 1', 'Task 2'],
  1: ['Task 3'],
  2: ['Task 4'],
  3: []
}

//try to move from 1[0] to 2 
//oldStageID= 1
//newStageID= 2
//Task = 'task 3' 
//oldNewStage = ['task 4']
// newStage = ['task 4 ', 'task 3']

const taskReducer = (state = initialState, action) => {
    // if (typeof state === 'undefined') {
    //     return state
    // }
    switch (action.type) {
        case 'MOVE_TASK':
        //     let newStage = state[action.newStageID] 
        //     newStage.push(action.task)
        //     let oldStage = state[action.oldStageID] 
        //     oldStage.filter((item)=>{
        //         //keep if it's true 
        //         if(item!==action.task){
        //             return true
        //         }
        //         return false 
        //     })
        //     let result = {...state}
        //     result[oldStageId] = oldStage;
        //     result[newStageId] = newStage;
        //     return result;
            return state
        default:
            return state
    }
}

export default taskReducer

