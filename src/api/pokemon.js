const database = [{
    id: 1,
    name: 'ポケモンA',
    hp: 100,
    type: '雷'
  },
  {
    id: 2,
    name: 'ポケモンB',
    hp: 200,
    type: '水'
  },
  {
    id: 3,
    name: 'ポケモンC',
    hp: 300,
    type: '炎'
  }
]

export default {
  fetch() {
    return database
  },
  find(id) {
    return database.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}
