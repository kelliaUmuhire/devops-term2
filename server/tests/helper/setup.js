require("../../model/db");
// const mongoose = require("mongoose");

let setUp = () => {
  // before((done) => {
  //   // runs before the first test case
  //   mongooseConnect
  //     .dbconnect() // connection to the data base
  //     .once("open", () => done())
  //     .on("error", (error) => done(error));
  // });
  // // beforeEach((done)=>{          // runs before each test case
  // //     const collectionName: = studentlists
  // //     mongoose.connection.db.listCollections({name: "studentlists"})
  // //         .next((error,collection)=>{                 //deleting the collection before each
  // //             if(collection){                         //test case to avoid duplicated key error
  // //                 mongoose.connection.db.dropCollection("studentlists")
  // //                 .then(() => done())
  // //                 .catch((err) => done(err))
  // //             }
  // //             else{
  // //                 done(error)
  // //             }
  // //         })
  // // })
  // after((done) => {
  //   // runs after the last test case
  //   mongooseConnect
  //     .dbclose()
  //     .then(() => done())
  //     .catch((err) => done(err));
  // });
};

module.exports = setUp;
