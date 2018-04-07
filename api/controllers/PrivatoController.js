/**
 * PrivatoController
 *
 * @description :: Server-side logic for managing privatoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	mostra:function(req,res){
        Privato.find().exec(function (err, peopleNamedMary){
            if(err){
                res.send(err)
            }else{
                res.send(peopleNamedMary)
                //res.view('persone/persone',{persone:peopleNamedMary});
            }
      });
      
    }
};

