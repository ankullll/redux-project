import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/CollectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch()
  const clear = ()=>{
    dispatch(clearCollection())
  }

  return (
    <div className="overflow-auto px-10">
      <div className="flex justify-between py-5" >
        <h2 className="text-xl font-medium">Your Collection</h2>
        <button onClick={clear} className="bg-red-600 rounded text-base font-medium px-4 py-2 active:scale-95">Clear Collection</button>
      </div>
      <div className=" flex gap-5 gap-x-7 flex-wrap   justify-start  ">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              {" "}
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
