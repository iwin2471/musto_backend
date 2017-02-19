module.exports = (router, Mustos, Users) =>{
  router.get('/schedules/:token', function(req, res){
    var token = req.params.token;
    Users.findOne({token: token}, (err, user)=>{
      if(err) return res.status(500).send("DB ERR");
      if(!user) return res.status(404).send("user not found");
      Mustos.find({owner: user.name}, (err, mustos)=>{
        if(err) return res.status(500).send("DB err");
        if(mustos) return res.status(200).send(mustos);
        else return res.status(404).send("schedules not found");
      });
    });
  })

  .post('/schedules', function(req, res){
    var params = ['token', 'title', 'Date', 'content', 'start_time', 'end_time'];
     
    if(1){
      Users.findOne({token: token}, (err, user)=>{
        if(err) return res.status(500).send("db err");
        if(!user) return res.stauts(404).send("User not found");
        var new_user = new Users({
          owner: user.name,
          Date: req.params.Date,
          schedules:[{
          }],
          
          title: req.params.title,
        });
      });
    } 
  })

  .get('/schedule/:cheid', (req, res)=>{
    res.send(req.params.cheid);
  })

  .put('/schedule/:scheid', (req,res)=>{
    
  })

  .delete('/schedule/:scheid', (req, res)=>{
    
  })
 

  return router;
}
