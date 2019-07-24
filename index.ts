interface LoggerInterface {
    log(arg:string|object): void
}

class Logger implements LoggerInterface {
    log (arg:string|object) {
        if (typeof console.log === 'function') {
            console.log(arg)
        } else {
            alert(arg)
        }
    }
}