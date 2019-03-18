interface State{ // Type Definition 
    title: string,
    description: string,
    price: string,
    _id: string
}

const intialState: State={//Create an initial state
    title: "Default Product",
    description: "Default Product Description",
    price: "$20",
    _id: "212125646546dfsdfds"
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