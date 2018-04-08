/**
 * CorsoController
 *
 * @description :: Server-side logic for managing corsoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req,res){
        res.view('corso/corso');
    },

    getCorsi:function(req,res){
        //res.view('corso/corso');

        Corso.find().exec(function (err, peopleNamedMary){
            if(err){
                res.send(err)
            }else{
                //res.send(peopleNamedMary)
                //res.view('persone/persone',{persone:peopleNamedMary});
                res.json(peopleNamedMary);
            }
        });
    },
    show:function(req,res){
       res.view("corso/show");
    },

    showCourse:function(req,res){
        Corso.query("select *, DATE_FORMAT(data_inizio,'%d/%m/%Y') as dataInizio,DATE_FORMAT(inizio_stage,'%d/%m/%Y') as dataInizioStage, DATE_FORMAT(data_fine,'%d/%m/%Y') as dataFine from corso where id=?", [ req.param('id') ] ,function(err, course) {
            if (err) { return res.serverError(err); }
            Corso.query("select cl.id,p.cf,p.nome,p.cognome,i.prezzo,i.esito_esame from ((iscrizione i join corso c on c.id=i.idcorso) join cliente cl on cl.id=i.idcliente) join privato p on p.id=cl.id where c.id=?",[req.param('id')],function(err,subscribers){
               if (err) { return res.serverError(err); }
                    var data = {course,subscribers};
                    res.send(data);
            });
        
          });
    },


    add:function(req,res){
        res.view("corso/add");
    },

    edit:function(req,res){
        res.view("corso/add");
    }
};

