  //usar el httpclient para pasar los datos al back y hacer los calculos
  const https = require("https");
  const express = require('express');
  const cors = require('cors')
  const app = express()
  const port = 3030

  app.get('/prestamo',cors(), async (req,res)=>{
    res.send(
      {
        Prestamo:Prestamo(req)
      }
    )
  })
  
  const Prestamo = (req) => {
  let Name = req.query.Name
  //console.log("Prueba"+Salary)
  let Salary = req.query.Salary;
  let Duration = req.query.Duration;
  let Work = req.query.Work;
 
  
  if (Work =="Desempleado") {
     return "Su perfil no es apto para un prestamo en este momento.";
     
  }else if (Work="Independiente" && Duration>=36) {
    let PuntajeInd = Math.random() * (800 - 300) + 300;
      if(PuntajeInd>600){
         PrestamoInd=(Salary*PuntajeInd)/100
        return "Saludos "+Name+": Hemos verificado su información y le comunicamos que su prestamo puede ser de hasta "+PrestamoInd;
             
      } else { return "Su perfil no es apto para un prestamo en este momento. Su puntaje es de: "+PuntajeInd;
   }
  } else if (Work="Empleado" && Duration>=36){
    let PuntajeEmp = Math.random() * (800 - 300) + 300;
    if(PuntajeEmp>550){
      PrestamoEmp=(Salary*PuntajeEmp)/100
      return "Saludos "+Name+": Hemos verificado su información y le comunicamos que su prestamo puede ser de hasta "+PrestamoEmp;
      
    }else {return "Su perfil no es apto para un prestamo en este momento. Su puntaje es de: "+PuntajeEmp;

    
  }}
  console.log("Intento 10000! !"+Prestamo)
}

   
module.exports = {
 Prestamo
};

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`) //root -> localhost:3030
})

// terminar de cambiar los document.get element byid quitar el comentado