
class RecycleBin {

    constructor() {}

   //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }

    restore(){

       $(`a[title='Restore']`).click()        
    }

    delete() {

       $(`a[title='Delete forever']`).click()
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.RecycleBin = RecycleBin