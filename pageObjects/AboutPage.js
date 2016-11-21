
class About {

    constructor() {
     
        this.left_arrow = $('ul [href="/preserver/notes"]')
        this.github = $('.fa-github')
        this.twitter = $('.fa-twitter')
        this.menu = $('ul.navbar-right li.dropdown a[href$="about"]')

    }

    go () {

        $('ul.navbar-right li.dropdown').click()
        browser.sleep(2000)
        this.menu.click()
    }
 
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.About = About