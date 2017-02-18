module.exports = (router, musto) =>{
  router.get('/', function(req, res){
     res.send("musto service ");
  })

  .post('/schedule', function(req, res){
    
  })

  .get('/schedule/:cheid', (req, res)=>{
   
  })

  return router;
}
