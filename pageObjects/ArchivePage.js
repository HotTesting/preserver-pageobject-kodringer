
class ArchivePage {

    constructor() {}

   //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }

    unarchive(){

       $(`a[title='Unarchive']`).click()        
    }

    delete() {

       $(`a[title='Delete']`).click()
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.ArchivePage = ArchivePage