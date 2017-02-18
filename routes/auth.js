module.exports = (router, rnd_string, Users, passport, func) =>{
  router.post('/signup', (req, res) => {
    const id = req.body.id;
    const passwd = req.body.passwd;
    const name = req.body.name;
    
    const new_user = new Users({
      id: id,
      passwd: passwd,
      name: name,
      token: rnd_string.generate()
    });
    
    new_user.save((err, data)=>{
      if(err) return res.status(400).send("save err");
      return res.status(200).json(new_user);
    });
  })

  .post('/signin', (req, res)=>{
    Users.findOne({id: req.body.id, passwd: req.body.passwd}, {_id: 0}, (err, user)=>{
      if(err) return res.status(500).send("DB err");
      if(users) return res.status(200).send(user);
      else return res.status(401).send("incorrect id or passwd");
    })
  })
  return router;
}
