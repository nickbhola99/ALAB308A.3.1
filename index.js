// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
 
//   const db = await central(id);
//   console.log(db);
//Uses the then() method to access the databases db1, db2, and db3
  return central(id).then((returnedValue) => {
      return Promise.all([dbs[returnedValue](id), vault(id)]).then(([result, vaultResult])=> {
          const finalObject = {"id":id, ...result, ...vaultResult};
              const endTime = performance.now() //performance timer
              console.log(endTime);     
              return finalObject;   //final Promise containing the object with all information, is returned all the way to top level
      }) ;
      // dbs[returnedValue](id).then((x) => {
      //     vault(id).then((y) => {
      //         console.log(x);
      //         console.log(y);

              
      //         return{
      //             ...x, ...y
      //         }
              
      //     })
          
      // })
      
  });
    
}

for(let i = 1; i <= 10; i++){
    //const user = await getUserData(i); prints the Object
    const user = getUserData(i);
    console.log(user);
}    

