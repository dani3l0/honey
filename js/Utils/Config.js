export default class Config {

	// Initialization & localStorage availability check
	constructor(config) {
		this.config = config
		try {
			window.localStorage
			this.storageAvailable = true
		}
		catch (e) {
			this.storageAvailable = false
		}
	}

	// Get value from config or localStorage (if set)
	get(key) {
		let value = this.config["ui"][key]

		if (this.storageAvailable) {
			let type = typeof(value)
			let stored_value = window.localStorage.getItem(key)

			if (stored_value != null) {
				value = stored_value
				if (type == "number") value = Number(value)
				else if (type == "boolean") value = value == "true"
			}
		}

		return value
	}

	// Save value to localStorage
	set(key, value) {
		key = key.toLowerCase()
		this.config["ui"][key] = value

		if (this.storageAvailable) {
			window.localStorage.setItem(key, value)
		}
	}

	// Get services from config.json file
	getServices() {
		return this.config["services"]
	}
}
