/**
 * Corso.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  migrate: 'safe',
  tablename:'corso',
  connection: 'someMysqlServer',
    attributes: {
      id:{
        type:'integer',
        primaryKey: true,
        autoPK: true
      },
      codice:{
        type:'string'
      },
      nome:{
        type:'string'
      },
      ore:{
        type:'integer'
      },
      data_inizio:{
        type:'date'
      },
      inizio_stage:{
        type:'date'
      },
      luogo_stage:{
        type:'string'
      },
      data_fine:{
        type:'date'
      },
      data_termine10:{
        type:'date'
      },
      aula:{
        type:'string'
      },
      ora_inizio:{
        type:'integer'
      },
      ora_fine:{
        type:'integer'
      },
      data_esame:{
        type:'integer'
      },
      note:{
        type:'string'
      }
    }
};
