let app = app || {};

(() => {
    app.Utils = {
        pluralize: (count, word) => (count === 1) ? word : `${word}s`,

        extend() {
            const newObj = {}

            for (let i = 0; i < arguments.length; i++) {
                const obj = arguments[i]

                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        newObj[key] = obj[key]
                    }
                }
            }

            return newObj
        },

        store(namespace, data) {
            if (data) {
                return localStorage.setItem(namespace, JSON.stringify(data))
            }

            const store = localStorage.getItem(namespace)

            return (store && JSON.parse(store)) || []
        },

        uuid() {
            let uuid = ''

            for (let i = 0; i < 32; i++) {
                let random = Math.random() * 16 | 0

                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-'
                }

                uuid += ((i === 12)
                    ? 4
                    : ((i === 16)
                        ? (random & 3 | 8)
                        : random
                    )
                )
                .toString(16)
            }

            return uuid
        }
    }
})()