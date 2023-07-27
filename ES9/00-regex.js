// With this new feature we can fix and work with regex
const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec('2022-01-01')

console.log(matchers)