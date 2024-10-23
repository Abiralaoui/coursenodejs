import { createServer } from 'http' // on peut faire let et var mais on fait cont pour eviter les hak on  peut pas modidfier , http ets un objet 


const server = createServer((req,res)=>{

  console.log(req)

  res.setHeader('content-type', 'appp')
  res.write('hi \n ')
  res.write(req.url)
  if(req.url=='/ho'){
    res.statusCode=500
    res.write('test ')
  }else if (req.url=='/tete'){
    res.statusCode=500
    res.write('tetetete')
  }else {
    res.statusCode=404
  }
 
  res.end()

})

server.listen(3000 , ()=>{console.log('test')})