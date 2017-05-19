'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor () {
    this.options = {
      endpoints: {
        home: 'http://127.0.0.1:5000',
        users: 'http://127.0.0.1:5001',
        admin: 'http://127.0.0.1:5002',
        game: 'http://127.0.0.1:5003'
      }
    }
  }
  getAbout (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.home}/about`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  saveUser (user, callback) {
    let opts = {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      uri: `${this.options.endpoints.home}/signup`,
      body: user,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  getFormUser (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.home}/signup`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  getFormCity (countryCode, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.home}/signup/${countryCode}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  loginUser (nickname, password, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.home}/login`,
      body: {
        nickname,
        password
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  loginAdmin (nickname, password, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.admin}/login`,
      body: {
        nickname,
        password
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  consultUserAdmin (nickname, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.admin}/profileUser/${nickname}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  perfilUsuario (nickname, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/profile/${nickname}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  getHeroes (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.game}/view/heroes`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  getDataPlay (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.game}/play`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  getObjectsShop (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.game}/play/shop`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  saveObjectsShop (body, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.game}/play/shop`,
      body: body,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  saveGame (body, nivel, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.game}/play/${nivel}`,
      body: body,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
  partida (body, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.game}/play/init`,
      body: body,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
}
module.exports = Client
