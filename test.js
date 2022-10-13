/*
Testing cmd: node test.js --filter=ry
*/
const data = require('./data.js'); 
const expected = [
    {
      name: 'Uzuzozne',
      people: [
        {
          name: 'Lillie Abbott',
          animals: [
            {
              name: 'John Dory'
            }
          ]
        }
      ]
    },
    {
      name: 'Satanwi',
      people: [
        {
          name: 'Anthony Bruno',
          animals: [
            {
              name: 'Oryx'
            }
          ]
        }
      ]
    }
];

const args = process.argv; 

if(args.length == 3){ 

    if(args[2].startsWith('--filter')){ 

        const arg = args[2].split('='); 
        
        if(arg.length == 2){ 

            const query = arg[1]; 

            if(query != ''){ 

                let new_countries = []; 

                data.forEach((country) => { 

                    new_peoples = []; 
                    new_animals = []; 

                    v = false; 

                    country.people.forEach((people)=>{
                        people.animals.forEach((animal)=>{
                            if(animal.name.includes(query)){ 
                                new_animals.push({"name":animal.name}); 
                                v = true;  
                            }
                        });
                        if(v){ new_peoples.push({"name":people.name,"animals":new_animals}); }
                    });
                    if(v){ new_countries.push({"name":country.name,"people":new_peoples}); }
                });

                console.log(JSON.stringify(new_countries)==JSON.stringify(expected)); 

            }else{ console.log("Error: The argument query is empty!"); }
        }else{ console.log("Error: The argument must seperated by '='"); }
    }
    else if(args[2] == '--count'){ 
        let new_countries = [];
        data.forEach((country) => {
            new_peoples = [];
            country.people.forEach((people)=>{
                new_peoples.push({...people, "name":people.name+" ["+people.animals.length+"]"});
            });
            new_countries.push({"name":country.name+" ["+country.people.length+"]", "people":new_peoples});
        });
        console.log(JSON.stringify(new_countries, null, 2));
    }
    
}else{ console.log("Error: must have only 1 argument"); }