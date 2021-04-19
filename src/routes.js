/*
 * File: routes.js
 * File Created: Monday, 19th April 2021 1:33:43 pm
 * Author: IFTK (ibrahimftk@banksultra.co.id)
 * Copyright @ 2021 Ibrahim FT Kurniawan
 */

const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    }, {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    }, {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    }, {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    }, {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }

];

module.exports = routes;