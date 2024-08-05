import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB(){
    try{
        await databases.get(db);
        console.log("Database Connected !!");
    } 
    catch(err){
        try{
            await databases.create(db, db);
            console.log("Database Created");

            // Create Collections !!
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
            ]);

            console.log("Collection created");
            console.log("Database Connected");
        }   
        catch(err){
            console.log("Error Creating Databases or Collections", err);
        }
    }
    return databases;
}