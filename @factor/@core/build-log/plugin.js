const consola = require("consola")
const boxen = require("boxen")
module.exports = Factor => {
  return new (class {
    constructor() {}

    util(type, params) {
      consola[type].apply(null, params)
    }

    custom({ type, params, target }) {
      this.util(type, params, target)
    }

    log() {
      this.util("log", arguments)
    }

    info() {
      this.util("info", arguments)
    }

    success() {
      this.util("success", arguments)
    }

    error() {
      this.util("error", arguments)
    }

    warn() {
      this.util("warn", arguments)
    }

    box(msg) {
      console.log(boxen(msg, { padding: 1 }))
    }
  })()
}
