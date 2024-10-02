class localstorage {
    getItem(key) {
        return JSON.parse(localStorage.getItem(key))
    }
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    removeItem(key) {
        localStorage.removeItem(key)
    }
    hasKeyInLocalStorage(key) {
        return localStorage.getItem(key) !== null;
    }
}

export const ls =  new localstorage()