const express = require('express')
const app =express();
const loggerMiddleware = (req, res, next)=> {
const now=new Date();
const date=now.toLocaleDateString();
const time=now.toLocaleTimeString();
console.log('[$(date} $ {time}] ${req.methode} ${req.path}');
next();

};
//utiliser le middleware dans l'application
app.use(loggerMiddleware);
///exemple de rout pour tester le middleware
app.get("/",(req,rees) => {
    res.send("Exerce 1!")
})
app.get("/exercice1!" , (req,re)=>{
    res.send("une deuxieme API");
});
app.listen(3000,()=>
    consolelog("serveur démarré sur le port 3000")

);

