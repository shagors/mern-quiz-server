import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

//** get all questions */
export const getQuestions = async (re, res) => {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

//** insert all questions */ 
export const insertQuestions = async (req, res) => {
    try {
        const q = Questions.insertMany({ questions : [0], answers : [1] }, (err, data) => {
            res.json({msg : "Data save successfully....!"});    
        });
    } catch (error) {
        res.json({error});
    }
}

//** Delete request */
export const dropQuestions = async (req, res) => {
    res.json("Questions api delete request");
}

//** get all result */
export const getResult = async (req, res) => {
    res.json("Result API get request");
}

//** post all result */
export const storeResult = async (req, res) => {
    res.json("Result API post request");
}

//** delete all result */
export const dropResult = async (req, res) => {
    res.json("Result API delete request");
}