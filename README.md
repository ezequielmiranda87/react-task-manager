# Post Board -  React And Redux

## Description
A Post Board  App made with react and redux. Check the app live [here](https://ezequielmiranda87.github.io/react-task-manager)

## Dependencies
- React
- Redux
- Thunk
- Firebase 
    - Firestone - Data store
    - Authentication
    - Cloud functions
    - Hosting
- React-router
- Axios
- Materializecss

## Front-end application

### Routes

| Endpoint       | Description                  |
|----------------|:----------------------------:|
| /              | Load dashboard Component     |
| /dashboard     | Load dashboard Component     |
| /project/:{id} | Load a project component:id  |
| /create        | Load create project component|
| /signin        | Load signin component        |
| /singout       | Signout method               |


### Component Tree

```bash

|── App:
├── components
    ├── Nav
    │   ├── signed-in-link
    │   ├── signed-out-link
    ├── Dashboard
    │   ├── project-list
    │   ├── notifications
    ├── Project 
    │   ├── Project-detail
    │   ├── Project-create
    ├── User
        ├── Sign-in
        ├── Sign-up
```
## Back-end application