// const env = require('./env')

let resUrl = 'http://192.168.1.104:9000/'
let mp3FilePath
let dbHost
let dbUser
let dbPwd
// if (env === 'dev') {
//   resUrl = 'http://192.168.1.103:8081'
//   mp3FilePath = '/Users/sam/Desktop/resource/mp3'
//   dbHost = 'localhost'
//   dbUser = 'root'
//   dbPwd = '20110807'
// } else if (env === 'prod') {
//   resUrl = 'http://106.15.231.180'
//   mp3FilePath = '/root/nginx/upload/mp3'
//   dbHost = '106.15.231.180'
//   dbUser = 'root'
//   dbPwd = 'Abcd123456.'
// }

const category = [
  'Biomedicine',
  'BusinessandManagement',
  'ComputerScience',
  'EarthSciences',
  'Economics',
  'Engineering',
  'Education',
  'Environment',
  'Geography',
  'History',
  'Laws',
  'LifeSciences',
  'Literature',
  'SocialSciences',
  'MaterialsScience',
  'Mathematics',
  'MedicineAndPublicHealth',
  'Philosophy',
  'Physics',
  'PoliticalScienceAndInternationalRelations',
  'Psychology',
  'Statistics'
]

module.exports = {
  resUrl,
  category,
  mp3FilePath,
  dbHost,
  dbUser,
  dbPwd
}