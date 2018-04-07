/**
 * Privato.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {
  migrate: 'safe',
  tablename:'privato',
  connection: 'someMysqlServer',
    attributes: {
      id:{
        type:'integer',
        primaryKey: true,
        //autoPK: true
      },
      nome:{
        type:'string'
      },
      cognome:{
        type:'string'
      },
      data_nascita:{
        type:'date'
      },
      cf:{
        type:'string',
        unique: true
      }
    }
};

