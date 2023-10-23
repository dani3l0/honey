export default class Config {
	constructor(config) {
		this.config = config

		// localStorage availability check
		try {
			window.localStorage
			this.storageAvailable = true
		}
		catch (e) {
			this.storageAvailable = false
		}
	}

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

	set(key, value) {
		this.config["ui"][key] = value

		if (this.storageAvailable) {
			window.localStorage.setItem(key, value)
		}
	}

	getServices() {
		return this.config["services"]
	}
}
