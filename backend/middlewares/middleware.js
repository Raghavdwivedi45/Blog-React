import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
    const {token} = req.cookies["jwt"];
    if(!token) return res.status(501).json({error : "You must be logged in before this action"})
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    
    req.user = decoded;
    next();
}