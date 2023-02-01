

//** get all questions */
export const getQuestions = async (re, res) => {
    res.json("questions api get request");
}

//** insert all questions */ 
export const insertQuestions = async (req, res) => {
    res.json("Questions api post request");
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