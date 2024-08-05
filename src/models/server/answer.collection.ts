import {IndexType, Permission} from "node-appwrite";

import {db, answerCollection} from "../name";
import {databases} from "./config";

export default async function createAnswerCollection(){

    // Create Collection
    await databases.createCollection(db, answerCollection, answerCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Answer Collection is Created");


    // Creating Attributes and Indexes
    await Promise.all([
        databases.createStringAttribute(db, answerCollection, "content", 10000, true),
        databases.createStringAttribute(db, answerCollection, "questionId", 50, true),
        databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
    ]);

    console.log("Answer Attribute Created");
}