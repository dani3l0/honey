import { isDev } from "./variables"

export const className = (condition, classN) => {
	if (condition) return classN
	return ""
}

export const parseImgUrl = (img, isBackgrounds) => {
	if (img.startsWith("http://") || img.startsWith("https://")) {
		return img
	}
	if (isBackgrounds) img = `/res/backgrounds/${img}`
	else img = `/res/icons/${img}`
	return img
}
