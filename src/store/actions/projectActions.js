// Action creator for project - Thunk implementation
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Pause Dispatch
        // Make async operation here
        // Call Dispatch again
        const firestore = getFirestore();
        firestore.collection("projects").add({
            ...project,
            authorFirstName: 'Ezex',
            authorLastName: 'Miranda',
            authorId: 12345,
            createdAt: new Date()
        })
        .then((response)=>{
            console.log("RESPONSE ADD PROJECT", response);
            dispatch({type: "CREATE_PROJECT", project});
        }) 
        .catch((err)=>{
            console.log(`*****Error: ${err}`);
            dispatch({type: "CREATE_PROJECT_ERROR", err});
        })
    }
}

// Action creator for project - Basic implementation
export const createProjectWithoutThunk = (project) =>{
    return{
        type:"CREATE_PROJECT",
        project
    }
}