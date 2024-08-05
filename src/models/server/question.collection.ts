import {Permission} from "node-appwrite";

import {db, questionCollection} from "../name";
import {databases} from "./config";

export default async function createQuestionCollection(){

    // Create Collection
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.read("any")
    ])
}