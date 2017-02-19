module.exports = (router) =>{
  router.get('/', function(req, res){
     res.send('hello world');
  })

  return router;
}
