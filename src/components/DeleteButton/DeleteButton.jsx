import { useDispatch, useSelector } from "react-redux";
function DeleteButton({ itemId }) {
  const dispatch = useDispatch();
  let merch = useSelector((store) => store.merch);
  const handleClick = () => {
    console.log("whaqt is merch?", merch);
    dispatch({
      type: "DELETE_ITEM",
      payload: { id: itemId },
    });
  };
  return (
    <>
      <button
        className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2 mr-4"
        onClick={handleClick}
      >
        Delete Item
      </button>
    </>
  );
}

export default DeleteButton;
