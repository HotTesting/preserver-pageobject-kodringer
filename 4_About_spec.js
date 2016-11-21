//Импорт пейдж обджекта из другого файла
let About = require('./pageObjects/AboutPage.js').About

//Просто наш базовый URL для работы
//let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests About Page', function () {
    
    let about = new About()

//    beforeEach(function () {
//      browser.get('./notes')
//      browser.sleep(5000)
//    })

    //This function will be executed after each IT block in this DESCRIBE block
//    afterEach(function () {
      // Wiping cookie files ONLY for current domain
//      browser.manage().deleteAllCookies()
      // Wiping local and session storage
//      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
//        .then(undefined,
//          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
//          })
      //Wiping indexedDB     
//      browser.executeScript(`
//      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
//            for (let dbname of sender.target.result) {
//                indexedDB.deleteDatabase(dbname)
//            }
//        };
//      `).then(undefined,
//          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
//        })
//    })

    it('should be access to AboutPage from NotePage', function () {
        
        browser.get('./notes')
        browser.sleep(3000)
        about.go()
        browser.sleep(2000)
        expect(browser.getCurrentUrl()).toBe('http://www.hiteshbalar.com/preserver/about')
    })

    it('all elements should be visible', function () {

        browser.sleep(3000)
        expect(about.left_arrow.isDisplayed()).toBe(true)
        expect(about.github.isDisplayed()).toBe(true)
        expect(about.twitter.isDisplayed()).toBe(true)
        
    })

})