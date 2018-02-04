angular.module('terrys-today-character', [])
    .controller('CharacterController', function () {
        var character = this;
        character.topics = [
            {
                id: "01",
                title: "Fishing",
                text: "I met fishing after coming New Zealand."
            },
            {
                id: "02",
                title: "Home Garden",
                text: "When seeds garminate, feel delight."
            },
            {
                id: "03",
                title: "Photography",
                text: "All of pictures used on this website are taken by me"
            },
        ];
    });