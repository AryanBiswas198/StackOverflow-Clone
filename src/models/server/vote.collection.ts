import {Permission} from "node-appwrite";

import {db, voteCollection} from "../name";
import {databases} from "./config";

export default async function createVoteCollection(){

    // Create Collection
    await databases.createCollection(db, voteCollection, voteCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Vote Collection is Created");


    // Creating Attributes and Indexes
    await Promise.all([
        databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true),
        databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
        databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
        databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
    ]);

    console.log("Vote Attribute Created");
}