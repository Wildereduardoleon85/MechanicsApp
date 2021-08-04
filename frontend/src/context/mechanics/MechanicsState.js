import React, {useReducer} from 'react';
import axios from 'axios';
import MechanicsContext from './mechanicsContext';
import mechanicsReducer from './mechanicsReducer';
import { 
    GET_MECHANICS,
    ADD_MECHANIC
    } from '../types';

const MechanicsState = props => {
    const initialState = {
        mechanics: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(mechanicsReducer, initialState);

    // Get Mechanics
    const getMechanics = async () => {
        const res = await axios.get('/api/v1/mechanics');
        dispatch({type: GET_MECHANICS, payload: res.data});
    };
        

    //Add Mechanic
    const addMechanic = async mechanic => {
        const config = {
            headers: {
                'Cotent-type': 'application/json'
            }
        }
        const res = await axios.post('/api/v1/mechanics', mechanic, config);
        dispatch({type: ADD_MECHANIC, payload: res.data});
    };

    //Delete Mechanics
    

    //Update Mechanics
    

    // Clear Mechanics
    

    //Set current Mechanics
   

    //Clear current Mechanics
    

    //Filter Mechanics
    

    //Clear Filter
    

    return (
        <MechanicsContext.Provider 
            value={{
                mechanics: state.mechanics,
                loading: state.loading,
                error: state.error,
                getMechanics,
                addMechanic
            }}
        >
            {props.children}
        </MechanicsContext.Provider>
    )
};

export default MechanicsState;