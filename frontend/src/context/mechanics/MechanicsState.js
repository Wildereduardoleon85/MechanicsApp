import React, {useReducer} from 'react';
import axios from 'axios';
import MechanicsContext from './mechanicsContext';
import mechanicsReducer from './mechanicsReducer';
import { 
    GET_MECHANICS
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
        

    //Add Mechanics
    

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
                getMechanics
            }}
        >
            {props.children}
        </MechanicsContext.Provider>
    )
};

export default MechanicsState;