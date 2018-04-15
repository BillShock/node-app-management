/**
 * Corso.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'corso',
  //datastore: 'someMysqlServer',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
   // id:{
     // type:'integer',
    //  primaryKey: true,
    //  autoPK: true
   //},
    codice:{
      type:'string'
    },
    nome:{
      type:'string'
    },
    ore:{
      type:'number'
    },
    data_inizio:{
      type:'ref',
      columnType: 'date'
    },
    inizio_stage:{
      type:'ref',
      columnType: 'date'
    },
    luogo_stage:{
      type:'string'
    },
    data_fine:{
      type:'ref',
      columnType: 'date'
    },
    data_termine10:{
      type:'ref',
      columnType: 'date'
    },
    aula:{
      type:'string'
    },
    ora_inizio:{
      type:'number'
    },
    ora_fine:{
      type:'number'
    },
    data_esame:{
      type:'number'
    },
    note:{
      type:'number'
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

