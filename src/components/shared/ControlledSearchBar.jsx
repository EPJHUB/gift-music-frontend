import { FilterIcon, SearchIcon } from "../icons/Svgs"

const ControlledSearchBar = ({handleSearch}) => {
    const [inputSearch, setInputSearch] = useState("")
  return (
    <div onSubmit={handleSearch} className="w-full bg-white/20 flex justify-between gap-4 p-4 rounded-xl mx-auto">
    <div type="submit">
      <SearchIcon />
    </div> 
    <input
      className="bg-transparent w-full flex-1 text-white"
      type="text"
      placeholder="Buscar"
      name="q"
      value={inputSearch}
      onChange={(e) => setInputSearch(e.target.value)}

    />
    <div>
      <FilterIcon />
    </div>
  </div>
  )
}
export default ControlledSearchBar