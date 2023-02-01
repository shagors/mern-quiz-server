import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js';

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
        const q = Questions.insertMany({ questions, answers }, (err, data) => {
            res.json({msg : "Data save successfully....!"});    
        });
    } catch (error) {
        res.json({error});
    }
}

//** Delete request */
export const dropQuestions = async (req, res) => {
    try {
        await Questions.deleteMany();
        res.json({ msg : "Questions Deleted Successfully" });
    } catch (error) {
        res.json({ error });
    }
}

//** get all result */
export const getResult = async (req, res) => {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}

//** post all result */
export const storeResult = async (req, res) => {
    try {
        const { userName, result, attempts, points, achived } = req.body;
        if (!userName && !result) throw new Error('Data not provided....!');

        Results.create({ userName, result, attempts, points, achived }, (err, data) => {
            res.json({ msg : "Result saved Successfully"});
        });
    } catch (error) {
        res.json({error})
    }
}

//** delete all result */
export const dropResult = async (req, res) => {
    try {
        await Results.deleteMany();
        res.json({msg : "Result deleted successfully....!"});
    } catch (error) {
        res.json({ error });
    }
}