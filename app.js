const data = require('./data.js');
const args = process.argv || null;
if(args.length == 3){
    const arg = args[2].split('=');
    if(arg.length == 2){
        const fn = arg[0];
        const query = arg[1];
        if(fn.startsWith('--')){
            if(query != ''){
                let new_countries = [];
                switch(fn){
                    case '--filter':
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
                        console.log(JSON.stringify(new_countries, null,2));
                    break;
                    case '--count':
                        console.log(fn);
                    break;
                    default:
                        console.log(fn+ ": not defined");
                }

            }else{ console.log("Error: The argument query is empty!"); }
        }else{ console.log("Error: The argument function must start with '--'"); }
    }else{ console.log("Error: The argument must seperated by '='"); }
}else{ console.log("Error: must have only 1 argument"); }