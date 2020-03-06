import { store } from '../index'
import { checkPropTypes } from 'prop-types';

export const moveTask = (task,oldStageID,newStageID) =>({
    //DEFINE THE NAME OF ACTION
    type: 'MOVE_TASK', 
    task,
    oldStageID,
    newStageID
})

export const boundMoveTask = (task, oldStageID,newStageID)=>
    store.dispatch(task, oldStageID,newStageID)
