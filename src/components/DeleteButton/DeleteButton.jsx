import { useDispatch, useSelector } from 'react-redux'
function DeleteButton({itemId}){

    const dispatch = useDispatch();
    let merch = useSelector(store => store.merch)
    const handleClick = () => {
        console.log('whaqt is merch?', merch)
        dispatch({
            type: 'DELETE_ITEM',
            payload: {id: itemId}
        })
    }
    return (
        <>
        <button onClick={handleClick}>DELETE</button>
        </>
    )
}

export default DeleteButton