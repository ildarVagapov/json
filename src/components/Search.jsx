import { useState } from "react"

export const Search = () => {
	const [value, setValue] = useState('')

	const onChangeInput = (str) => {
		setValue(str)
	}

	return (
		<input
			className='search'
			placeholder="search..."
			onChange={(e) => onChangeInput(e.target.value)}
			value={value}
		/>
	)
}