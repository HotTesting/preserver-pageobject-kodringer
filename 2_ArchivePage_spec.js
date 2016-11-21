//Импорт пейдж обджекта из другого файла
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let ArchivePage = require('./pageObjects/ArchivePage.js').ArchivePage

//Просто наш базовый URL для работы
//let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests archive', function () {
    let notesPage = new NotesPage()
    let archivePage = new ArchivePage()

    it('should be created when title and body provided', function () {
        
        browser.get('./notes')
        browser.sleep(5000)
        notesPage.createNote('Title1', 'Body2')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })

    it('should be archived', function () {

        notesPage.archive()
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('./archive-notes')
        browser.sleep(2000)
        expect(archivePage.getNotes().count()).toBe(1,
            'Notes count should be 1 after archived')
        
    })
    
 it('should be unarchived', function () {

        archivePage.unarchive()
        browser.sleep(5000)
        expect(archivePage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after archived')
        browser.sleep(2000)
        browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
       })
          
    })

})