export default class ObjectTester {
	constructor(cache) {
		this.cache = cache && Object ? cache : {} // preloads or sets empty cache
	}
	
	hasUpdated(key, obj) { // Saves an internal copy of the object for comparisons
		const match = this.isMatch(this.getData(key), obj)
		this.setData(key, obj)
		
		return !match
	}
	
	isMatch (obj1, obj2){ // Only correctly matches enumerables
		return JSON.stringify(obj1) === JSON.stringify(obj2)
	}
	
	purgeCache(key) { // If you want to free memory
		return this.getData(key) !== undefined ? delete this.cache[key] : false // delete returns true 🤷
	}
		
	getData(key) {
		return this.cache[key] ? this.cache[key] : undefined
	}
		
	setData(key, data) {
		return this.cache[key] = data
	}
}