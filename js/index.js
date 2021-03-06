angular.module('terrys-today', [])
    .controller('IndexController', function () {
        var index = this;
        index.features = [
            { title: 'Biography', linkto: 'biography.html', fgclass: 'fg-black', id: 'history' },
            { title: 'My Skills', linkto: 'skills.html', fgclass: 'fg-white', id: 'skills' },
            { title: 'Character', linkto: 'character.html', fgclass: 'fg-black', id: 'character' }
        ];

        index.medias = [
            { title: 'Seiji Tonouchi on the go', linkto: 'https://seijitonouchi.wordpress.com/', bgimage: 'images/history.png', fgclass: 'fg-black', id: 'blog1' },
            { title: 'NZで楽しむ家庭菜園と木', linkto: 'https://nzsaien.wordpress.com/', bgimage: 'images/skills.png', fgclass: 'fg-white', id: 'blog2' },
            { title: 'TOEIC900点台とか別に目指さないブログ', linkto: 'https://toeic900noneed.wordpress.com/', bgimage: 'images/skills.png', fgclass: 'fg-black', id: 'blog3' },
            { title: 'Terry\'s tech note', linkto: 'https://terrystechnote.wordpress.com/', bgimage: 'images/character.png', fgclass: 'fg-white', id: 'blog4' }
        ];
    });