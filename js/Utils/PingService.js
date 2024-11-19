export default function PingService(uri, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", uri)
    xhr.onreadystatechange = function() {
        if (this.readyState < 4) return
        let code = this.status
        setTimeout(() => callback(code), 3000)
    }
    xhr.send()
}
