import { FilterIcon, SearchIcon } from "../icons/Svgs"

const SearchBar = ({handleSearch}) => {
  return (
    <form onSubmit={handleSearch} className="w-full bg-white/20 flex justify-between gap-4 p-4 rounded-xl mx-auto">
    <button type="submit">
      <SearchIcon />
    </button> 
    <input
      autoComplete="off"
      className="bg-transparent w-full flex-1 text-white outline-none"
      type="text"
      placeholder="Buscar"
      name="q"
    />
    <button type="button" htmlFor="">
      <FilterIcon />
    </button>
  </form>
  )
}
export default SearchBar