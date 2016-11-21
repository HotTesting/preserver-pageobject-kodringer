//Импорт пейдж обджекта из другого файла
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let ArchivePage = require('./pageObjects/ArchivePage.js').ArchivePage
let RecycleBin = require('./pageObjects/RecycleBin.js').RecycleBin

//Просто наш базовый URL для работы
//let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests remove', function () {
    let notesPage = new NotesPage()
    let archivePage = new ArchivePage()
    let recycleBin = new RecycleBin()

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

    it('should be created when title and body provided', function () {
        
        browser.get('./notes')
        browser.sleep(5000)
        notesPage.createNote('Title1', 'Body2')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })

    it('should be removed from NotesPage', function () {

        notesPage.delete()
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('./recycle-bin')
        browser.sleep(2000)
        expect(recycleBin.getNotes().count()).toBe(1,
            'Notes count should be 1 after remove')
        
    })
    
    it('should be restored from RecycleBin', function () {

        recycleBin.restore()
        browser.sleep(5000)
        expect(recycleBin.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('./notes')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after restore')
        
    })

    it('should be removed from ArchivePage', function () {

        notesPage.archive()
        browser.sleep(2000)
        browser.get('./archive-notes')
        browser.sleep(2000)
        archivePage.delete()
        browser.sleep(2000)
        expect(archivePage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('./recycle-bin')
        browser.sleep(2000)
        expect(recycleBin.getNotes().count()).toBe(1,
            'Notes count should be 1 after remove')

    })

    it('should be removed from RecycleBin', function () {

        browser.sleep(2000)
        recycleBin.delete()
        browser.sleep(2000)
        element(by.buttonText('DELETE')).click()
        browser.sleep(2000)
        expect(recycleBin.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('./archive-notes')
        browser.sleep(2000)
        expect(archivePage.getNotes().count()).toBe(0,
            'Notes count should be 0 after remove')
        browser.get('./notes')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0 after remove')
        
    })
})