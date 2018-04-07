/**
 * PersoneController
 *
 * @description :: Server-side logic for managing persones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
	index:function(req,res){
        
        //res.view('cat/cat');
        //

        Persone.find().exec(function (err, peopleNamedMary){
                if(err){
                    res.send(err)
                }else{
                    //res.send(peopleNamedMary)
                    res.view('persone/persone',{persone:peopleNamedMary});
                }
        });
          

        
    },

    getPersone:function(req,res){
        
        //res.view('cat/cat');
        //

        Persone.find().exec(function (err, peopleNamedMary){
                if(err){
                    res.send("Error")
                }else{
                    //res.send(peopleNamedMary)
                    //res.view('persone/persone',{persone:peopleNamedMary});
                    res.json(peopleNamedMary);
                }
          });
          

        
    },


    add:function(req,res){
        /*
            if(req.param("id")!=undefined){
                res.send("add" + req.param("id"));
            }
            else{
                res.send("You can't make a post request without typing an id");
            }
        */

        res.view("persone/add");
        
    }
};

