module.exports = (router, musto) =>{
  router.get('/', function(req, res){
     res.send("musto service ");
  })

  .post('/schedules', function(req, res){
    
  })

  .get('/schedule/:cheid', (req, res)=>{
   
  })

  .put('/schedule/:scheid', (req,res)=>{
    
  })

  .delete('/schedule/:scheid' (req, res)=>{
    
  })
 

  return router;
}
