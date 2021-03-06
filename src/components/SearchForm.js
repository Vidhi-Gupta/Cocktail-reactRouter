import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchItem} = useGlobalContext();
  const searchValue = React.useRef('');
  const searchCocktail = () => {
    setSearchItem(searchValue.current.value)
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])

  const handleSubmit=(e)=> {
    e.preventDefault();
  }
  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail here</label>
        <input type='text'
        id='name'
        ref={searchValue}
        onChange={searchCocktail}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
