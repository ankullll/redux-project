import { useDispatch } from "react-redux"
import { removeCollection } from "../redux/features/CollectionSlice"

const CollectionCard = ({item}) => {
    const dispatch = useDispatch()
    const removeItem = (item)=>{
        dispatch(removeCollection(item))
    }
  return (
    <div className=" my-5 w-60 h-60 bg-white-600 rounded-xl overflow-hidden relative">
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
        <button onClick={()=>removeItem(item)}
        className="bg-red-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-90">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CollectionCard