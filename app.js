const data = require('./data.js'); // Getting data

const args = process.argv; // Getting arguments

if(args.length == 3){ // Checking if there's only 3 arguments eg: node [1] app.js [2] --count[3]

    if(args[2].startsWith('--filter')){ // Checking if argument is --filter

        const arg = args[2].split('='); 
        // arg is an array contains two values first is --filter and second is query

        if(arg.length == 2){ // make sure that the filter argument contains only two values

            const query = arg[1]; // the query value, eg: "ry"

            if(query != ''){ // Checking query if not emty

                let new_countries = []; // empty array will contains the final result of countries data

                data.forEach((country) => { // loop through countries

                    new_peoples = []; // in each iteration we reset people and animals arrays
                    new_animals = []; 

                    v = false; // v to make sure not returning empty array

                    country.people.forEach((people)=>{
                        people.animals.forEach((animal)=>{
                            if(animal.name.includes(query)){ // checking if animal name contains the query word
                                new_animals.push({"name":animal.name}); 
                                v = true; 
                                // once we find the target name, v turn True to be able to push the people & country arrays, otherwise it will jump to next counrties iteration.
                            }
                        });
                        if(v){ new_peoples.push({"name":people.name,"animals":new_animals}); }
                    });
                    if(v){ new_countries.push({"name":country.name,"people":new_peoples}); }
                });

                console.log(JSON.stringify(new_countries, null, 2)); // display the result

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