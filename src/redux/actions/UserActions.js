export const updateFirstName = (firstName) => {
    return ({
        type: 'UPDATE_FIRST_NAME',
        value: firstName
    })
}

export const updateLastName = (lastName) => {
    return({
        type: "UPDATE_LAST_NAME",
        value: lastName
    })
}

//1. define the action --> which is a function in itself
//2. connect that action with component
