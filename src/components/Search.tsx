import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"

const Search = (
  { 
    setQueryTerm, 
    setCurrentVideoIndex
  }: { 
    setQueryTerm: Dispatch<SetStateAction<string>>
    setCurrentVideoIndex:  Dispatch<SetStateAction<number>>
  }
) => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQueryTerm(inputValue)
    setCurrentVideoIndex(0)
  }

  return (
    <div className="border-black border-2 rounded-lg">
      <form onSubmit={event => handleSubmit(event)}>
        <input
          className="w-full rounded-lg p-2 outline-0"
          value={inputValue}
          onChange={event => handleChange(event)}
          type="text" 
          placeholder="Search..." 
        />
      </form>
    </div>
  )
}

export default Search