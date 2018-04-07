/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  migrate: 'safe',
    connection: 'someMysqlServer',
    tablename:'cliente',
    attributes: {
      id:{
        type:'integer',
        primaryKey: true,
        autoPK: true,
      },
      indirizzo:{
        type:'string'
      },
      civico:{
        type:'string'
      },
      cap:{
        type:'string'
      },
      citta:{
        type:'string'
      },
      p_iva:{
        type:'string'
      },
      telefono:{
        type:'string'
      },
      email:{
        type:'string'
      },
      note:{
        type:'string'
      }
    }
};

