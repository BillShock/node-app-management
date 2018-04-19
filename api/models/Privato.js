/**
 * Privato.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome:{
      type:'string'
    },
    cognome:{
      type:'string'
    },
    data_nascita:{
      type:'ref',
      columnType: 'date'
    },
    cf:{
      type:'string'
    }

  }
};

