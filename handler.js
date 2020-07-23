module.exports.run = (event, context, callback) => {

  // invoke with logs: `sls invoke --function helloWorld --logs`
  // past logs: `sls logs --function helloWorld`
  console.log('debuggin')

  // either call the callback function or return a Promise
  // callback(null, "Hello World")
  return Promise.resolve("Hi World")

  // deploy with `sls deploy function --function helloWorld`
}