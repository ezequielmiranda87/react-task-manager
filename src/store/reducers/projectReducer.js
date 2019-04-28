const initialState = {
  projects: [
    {
      id: 1,
      title: " Create a Spaceship",
      contenet: "Est laboris duis ad culpa proident commodo."
    },
    {
      id: 2,
      title: " Join a crew",
      content:
        "Commodo non aliquip nisi magna duis aliquip sit nisi nulla incididunt dolor laboris ea duis."
    },
    {
      id: 3,
      title: " Fly to Space",
      content: "Exercitation qui duis deserunt ex exercitation."
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      //console.log(state)
      console.log("created project", action.project);
      return{
        ...state,
        projects : [...state.projects, action.project]
      }
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project errr", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
