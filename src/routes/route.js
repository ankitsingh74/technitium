const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


let  players = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
        "swimming"
    ]
}
]

// Problem Statement 1 :
// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )


router.post('/players', function (req, res) {
  
    let newplayer=req.body;
    // console.log(newplayer);
for (let i = 0; i < players.length; i++) {
    const element = players[i].name;
    if (element==newplayer.name) {
        return res.send({msg:"name already present"})
    }
}

    players.push(newplayer)

    console.log(players);
    //LOGIC WILL COME HERE
  return  res.send(  { data: players , status: true }  )
})




module.exports = router;