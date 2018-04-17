/**
 * CorsoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getCorsi: async function(req,res){
        var sql = "select *, DATE_FORMAT(data_inizio,'%d/%m/%Y') as dataInizio,DATE_FORMAT(inizio_stage,'%d/%m/%Y') as dataInizioStage, DATE_FORMAT(data_fine,'%d/%m/%Y') as dataFine from corso";
        try{
            var data = await Corso.getDatastore().sendNativeQuery(sql,[])
            return res.json(data.rows);
        } catch(err){
            return res.json(err);
        }
        
        
    },
    showCourse: async function(req,res){
        var sql = "select cl.id,p.cf,p.nome,p.cognome,i.prezzo,i.esito_esame from ((iscrizione i join corso c on c.id=i.idcorso) join cliente cl on cl.id=i.idcliente) join privato p on p.id=cl.id where c.id=$1";

        try {
            var data = await Corso.getDatastore().sendNativeQuery(sql,[req.param('id')]);
            return res.json(data);
          } catch (err) {
            return res.json(err);
          }

        
    },
    /*
    add:function(req,res){
        res.view("corso/add");
    },
    */
    pagina:function(req,res){
        res.view("corso/corso");
    }
};

