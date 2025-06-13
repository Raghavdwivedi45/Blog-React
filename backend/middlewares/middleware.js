import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
    if(!req.cookies["jwt"]) return res.status(501).json({error : "You must be logged in before this action"})
    const {token} = req.cookies["jwt"];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
}