/**
 * PrivatoController
 *
 * @description :: Server-side logic for managing Privatoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPrivati: async function(req,res){
        var sql = "select *, DATE_FORMAT(data_nascita,'%d/%m/%Y') as dataNascita from privato";
        try{
            var data = await Privato.getDatastore().sendNativeQuery(sql,[])
            return res.json(data.rows);
        } catch(err){
            return res.json(err);
        }
        
        
    },
};

