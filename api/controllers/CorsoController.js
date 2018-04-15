/**
 * CorsoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getCorsi:function(req,res){
        //res.view('corso/corso');

        Corso.find().exec(function (err, peopleNamedMary){
        //Corso.query("select *, DATE_FORMAT(data_inizio,'%d/%m/%Y') as dataInizio,DATE_FORMAT(inizio_stage,'%d/%m/%Y') as dataInizioStage, DATE_FORMAT(data_fine,'%d/%m/%Y') as dataFine from corso",[],function(err,peopleNamedMary){
            if(err){
                res.send(err)
            }else{
                //res.send(peopleNamedMary)
                //res.view('persone/persone',{persone:peopleNamedMary});
                res.json(peopleNamedMary);
            }
        });
    },
    add:function(req,res){
        res.view("corso/add");
    },
    pagina:function(req,res){
        res.view("corso/corso");
    }
};

