import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/SearchSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    const {register,reset,handleSubmit}= useForm()
    const submitHandler = (data)=>{
        dispatch(setQuery(data.query))
        reset()
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} className="flex px-10 pt-10 gap-5">
            <input required {...register('query')} type="text" placeholder="Search "className="w-full border-b outline-none"/>
            <button className="border rounded px-3 py-2 cursor-pointer bg-amber-50 text-gray-900 active:scale-95" >Search</button>
        </form>
    </div>
  )
}

export default SearchBar