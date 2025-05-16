import express from "express";
const router = express.Router();

// router.get("/signup", async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         let user = await User.findOne({ username });
//         if (user) return res.status(400).json({ msg: "User already exists" });

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         user = new User({ username, password: hashedPassword });
//         await user.save();

//         res.status(201).json({ msg: "User registered" });
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// })

export default router;

