import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/SearchSlice";

const Tabs = () => {
   const activeTab = useSelector((state)=>state.search.activeTab)
   
  const dispatch = useDispatch();
  const tabs = ["photos", "videos"];
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((e, idx) => {
        return (
          <button onClick={()=>{
            dispatch(setActiveTabs(e))} }
            className={`${(activeTab==e?"bg-blue-600":"bg-emerald-600")} transition  uppercase active:scale-95  rounded px-3 py-2`}
            key={idx}
          >
            
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
