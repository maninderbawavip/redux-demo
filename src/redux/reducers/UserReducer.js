// first reducer

// reducer is function that does these two tasks
// 1. stores some relevant data in state of reducer itself
// 2. deciding on what to do when it gets an action

// intially there is no state -> we initialize a state

const INITIAL_STATE = {
    firstName: "Maninder",
    lastName: "Bawa"
}

// whenever any action is triggered this reducer will get called with that action
// it will make the chnages and return back the new state

export const UserReducer = (state=INITIAL_STATE, action) => {

    if(action.type === "UPDATE_FIRST_NAME"){
        const newState = {...state}
        newState.firstName = "Rahul"
        return newState
    }
    
    return state;
}