import { useSelector } from 'react-redux'

const parseLocation = location => {
	const arr = location.split('/')
	const section = arr[1] || 'home'
	const value = arr[2] || undefined
	return [
		section,
		value,
	]
}

export const useLocation = () => {
	const location = useSelector(state => state.location)
	const [section, value] = parseLocation(location)
	return [section, value]
}
