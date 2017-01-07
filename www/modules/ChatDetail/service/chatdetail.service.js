(function() {

    'use strict';

    angular
        .module('chatdetail.module')
        .service('Chats', ['$q', chatDetailService]);

    function chatDetailService($q) {

        var chats = [{
            id: 0,
            name: 'Raju Bera',
            lastText: 'Hey',
            face: 'img/face.png'
        }, {
            id: 1,
            name: 'John Dash',
            lastText: 'My Other Photo',
            face: 'img/face.png'
        }];

        this.getAll = function() {
            return chats;
        }
        this.getMessageById = function(chatId) {

            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
        this.remove = function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        }



    }



})();
