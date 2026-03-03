import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/CollectionSlice";
import { toast } from "react-toastify";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollection = (item)=>{
    dispatch(addCollection(item))
    toast("Item successfully added to cart ")
  }
  return (
    <div className="w-60 h-60 bg-white-600 rounded-xl overflow-hidden relative">
      <a target="_blank" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover  overflow-hidden"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover overflow-hidden"
            autoPlay
            muted
            loop
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="  w-full px-3 py-3 absolute bottom-0 flex justify-between items-end gap-3"
      >
        <h2 className="text-xl font-semibold h-14 overflow-hidden capitalize">
          {item.title.slice(0, 25)}...
        </h2>
        <button 
        onClick={()=>{
          addToCollection(item)
        }} className="bg-emerald-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-90">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
