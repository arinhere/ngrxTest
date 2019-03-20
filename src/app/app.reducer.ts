interface prodModel{
    title: string,
    description: string,
    price: string,
    _id: string
}
export interface State{ // Type Definition 
    listProducts: prodModel[]
}

const intialState: State={//Create an initial state
    listProducts:[]
}

export function AppReducer(state = intialState,action){//Reducer is just a function which accept, state and the action for it
    switch(action.type){ //Define Switch cases to switch between cases
        case "LOAD_PRODUCTS":
        return {
            body: intialState
        }

        default://For default return the state without any changes
         return state;
    }
}