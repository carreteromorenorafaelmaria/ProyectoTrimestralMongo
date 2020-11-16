db.futbolistaspremierleague.insertMany([
 
    {
        "NombreFutbolista":"Raheem Sterling", 
        "altura": 1.70, 
        "país": "Inglaterra",
        "edad": 25,
        "valor de mercado": 128000000, 
        "equipos": ["Queens Park Rangers","Liverpool","Manchester City"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["EI","DC"]
    },
    
    {
        "NombreFutbolista":"Georginio Wijnaldum", 
        "altura": 1.75, 
        "país": "Países Bajos",
        "edad": 30,
        "valor de mercado": 40000000, 
        "equipos": ["Sparta","Feyenoord","PSV Eindhoven","Newcastle United","Liverpool"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["MC","MCO","MCD"]
    },
    {
        "NombreFutbolista":"Sadio Mané", 
        "altura": 1.74, 
        "país": "Sénegal",
        "edad": 28,
        "valor de mercado": 120000000, 
        "equipos": ["Génération Foot","FC Metz","RB Salzburgo","Southampton","Liverpool"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["EI","DC"]
    },
    {
        "NombreFutbolista":"Jack Grealish", 
        "altura": 1.80, 
        "país": "Inglaterra",
        "edad": 25,
        "valor de mercado": 45000000, 
        "equipos": ["Aston Villa","	Notts County"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["EI","DC","MCO"]
    },
    {
        "NombreFutbolista":"Heung-min Son", 
        "altura": 1.84, 
        "país": "Corea del Sur",
        "edad": 28,
        "valor de mercado": 75000000, 
        "equipos": ["FC Seoul Juv.","Hamburgo","Bayer 04 Leverkusen","Tottenham"],
        "pie preferido": "ambidiestro",
        "posiciones preferidas": ["EI","DC"]
    },
    {
        "NombreFutbolista":"Jamie Vardy", 
        "altura": 1.79, 
        "país": "Inglaterra",
        "edad": 33,
        "valor de mercado": 16000000, 
        "equipos": ["Sheff Wed U18","Stocksbridge","Halifax Town","Fleetwood", "Leicester City"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["DC"]
    },
    {
        "NombreFutbolista":"Caglar Söyüncü", 
        "altura": 1.87, 
        "país": "Turquía",
        "edad": 24,
        "valor de mercado": 40000000, 
        "equipos": ["Menemen Juv","Bucaspor Jgd","Gümüsordu","Aliaga FK", "Altinordu","SC Friburgo","Leicester City"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["DFC"]
    },
    
    {
        "NombreFutbolista":"Adama Traoré", 
        "altura": 1.78, 
        "país": "España",
        "edad": 24,
        "valor de mercado": 40000000, 
        "equipos": ["CE L’Hospitalet","FC Barcelona B","Aston Villa","Middlesbrough", "Wolverhampton Wanders"],
        "pie preferido": "derecho",
        "posiciones preferidas": ["ED","DC","CAD","MD"]
    },
    {
        "NombreFutbolista":"James Milner", 
        "altura": 1.75, 
        "país": "Inglaterra",
        "edad": 34,
        "valor de mercado": 5000000, 
        "equipos": ["Leeds United","Swindon Town","Newcastle United","Aston Villa", "Manchester City","Liverpool"],
        "posiciones preferidas": ["MC","MI","MD","LI","LD"]
    },
    {
        "NombreFutbolista":"Aymeric Laporte", 
        "altura": 1.90, 
        "país": "Francia",
        "edad": 26,
        "valor de mercado": 60000000, 
        "equipos": ["Athelic Bilbao","Manchester City"],
        "pie preferido": "izquierdo",
        "posiciones preferidas": ["LI","DFC"]
    },
    {
        "NombreFutbolista":"Ollie Watkins", 
        "altura": 1.80, 
        "país": "Inglaterra",
        "edad": 24,
        "valor de mercado": 30000000, 
        "equipos": ["Exeter City","Weston-Super-Mare AFC","Brentford","Aston Villa"],
        "posiciones preferidas": ["EI","DC","ED"]
    },
    {
        "NombreFutbolista":"Riyad Mahrez", 
        "altura": 1.79, 
        "país": "Argelia",
        "edad": 29,
        "valor de mercado": 49000000, 
        "equipos": ["Sarcelles","Quimper FC","AC Le Havre","Leicester City","Manchester City"],
        "pie preferido": "izquierdo",
        "posiciones preferidas": ["EI","MCO","ED"]
    },
    {
        "NombreFutbolista":"Kieran Tierney", 
        "altura": 1.80, 
        "país": "Escocia",
        "edad": 23,
        "valor de mercado": 32000000, 
        "equipos": ["Celtic Glasgow","Arsenal"],
        "pie preferido": "izquierdo",
        "posiciones preferidas": ["LI","DFC","MI"]
    },
    {
        "NombreFutbolista":"Gareth Bale", 
        "altura": 1.85, 
        "país": "Gales",
        "edad": 31,
        "valor de mercado": 25000000, 
        "equipos": ["Southampton","Tottenham","Real Madrid"],
        "pie preferido": "izquierdo",
        "posiciones preferidas": ["LI","ED","DC","MCO"]
    }
        
        
     ]);
     //Para que me muestre que todos los valores introducidos están bien.
     db.futbolistaspremierleague.find() 
     //Find para que me de los jugadores que pueden jugar en las posiciones de EI(Extremo Izquierdo) o DC(Delantero Centro)
     db.futbolistaspremierleague.find({$or:[{"posiciones preferidas":"DC"},{"posiciones preferidas":"EI"}]}) 
     //Find que no son zurdos y su valor de mercado es menor o igual a 40M€
     db.futbolistaspremierleague.find( { "pie preferido":{ $ne: "izquierdo" }, "valor de mercado": { $lte: 40000000 } } ) 
     //Find que da los jugadores que han jugado o juegan en el Manchester City
     db.futbolistaspremierleague.find({"equipos": {$eq: "Manchester City" }})
     //Find que da los jugadores que están entre los 25 y 29 años
     db.futbolistaspremierleague.find( { "edad":{ $gt:25  }, "edad": { $lt: 29 } } )
     //Find para los valores de pie preferido que son nulos
     db.futbolistaspremierleague.find( { "pie preferido": null } ) 
     // Find con regex de jugadores que empiezan por la R sin distinguir mayúsculas o minúsculas.
     db.futbolistaspremierleague.find( { "NombreFutbolista": { $regex: /^R/i} } )
     // Find con jugadores que pasan el 1.78
     db.futbolistaspremierleague.find({"altura": {$gte: 1.78 }})
     //Find para que salgan los jugadores ingleses
     db.futbolistaspremierleague.find( { "país": { $eq: "Inglaterra"} }) 
     //Find de jugadores que pueden jugar de EI(Extremo Izquierdo) y de DC
     db.futbolistaspremierleague.find({"posiciones preferidas":{ $all:["EI","DC"]}})
     //Find de jugadores que no son ni ED(Extremo Derecho) ni MCO(Mediocentro ofensivo)
     db.futbolistaspremierleague.find({$nor:[{"posiciones preferidas":"ED"},{"posiciones preferidas":"MCO"}]})
     //Find con jugadores con valor de mercado menor a 30M€ y de las Islas Británicas.
     db.futbolistaspremierleague.find({ $and: [ { "valor de mercado": { $lte: 30000000 } },{$or:[{"país":"Escocia"},{"país":"Inglaterra"},{"país":"Gales"}]}  ] } )
     db.futbolistaspremierleague.find( { "posiciones preferidas": { $size: 3 } } )
