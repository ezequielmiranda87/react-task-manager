// Action creator for project

export const createProject = (project) => {
    return (dispatch, getState) => {
        // Pause Dispatch
        // Make async operation here
        // Call Dispatch again
        dispatch({type: "CREATE_PROJECT", project})
    }
}