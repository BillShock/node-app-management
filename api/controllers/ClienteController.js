/**
 * ClienteController
 *
 * @description :: Server-side logic for managing clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	mostra:function(req,res){
        
        //res.view('cat/cat');
        //

        Cliente.find().exec(function (err, peopleNamedMary){
                if(err){
                    res.send("Error")
                }else{
                    res.json( peopleNamedMary )
                    //res.view('persone/persone',{persone:peopleNamedMary});
                }
        });
    },

    aggiungi:function(req,res){
       

        Cliente.query('CALL inserimento_privato(?,?,?,?,?,?,?,?,?,?,?,?)' , ["Aldo","Vandus","dsfdsfdsff","1991-05-14","Via Giuseppe Fava","29","80144","Napoli","dsfds","123456789","aaaaaaa","Le mie note"] ,function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            //sails.log(rawResult);
            res.send(rawResult);
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
          
            return res.ok();
          
          });
    }


};

