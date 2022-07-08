import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function EditButton({itemId}){
    let history = useHistory();
    const dispatch = useDispatch()
// fetch in useEffect
// url params /merch/:id/edit

//make a link and not event handler
    const handleClick = () => {
        dispatch({
            type: 'SET_MERCH_ITEM',
            payload: {id: itemId}
        })
    }

    return(
        <>
        <button className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2" onClick={handleClick}>Edit</button>
        </>
    )
}

export default EditButton