import { Search } from "./Search"
import { Sort } from "./Sort"


export const Header = () => {

	return (
		<div className="header">
			<Search />
			<Sort />
		</div>
	)
}