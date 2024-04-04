import User from '../models/user';
import Joi from 'joi';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const signupSchema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
});
const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
});


// dang ky
export const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(err => err.message);
            return res.status(400).json({ messages });
        }

        const existUser = await User.findOne({ email: req.body.email });
        if (existUser) {
            return res.status(400).json({
                message: "tai khoan da ton tai",
            });
        }
        const hashedPassword = await bcryptjs.hash(req.body.password, 10);
        const user = await User.create({ ...req.body, password: hashedPassword });
        return res.status(201).json({ user });
    } catch (error) {
        console.log(error);
    }
}


// dang nhap
export const signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(err => err.message);
            return res.status(400).json({ messages });
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                message: "tai khoan khong ton tai",
            });
        }
        const isMatch = await bcryptjs.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Mat khau khong dung"
            });
        }
        const token = jwt.sign({ id: user._id }, "123456", { expiresIn: "1h" })
        // const user = await User.create({ ...req.body, password: hashedPassword });
        return res.status(201).json({ user, token });
    } catch (error) {
        console.log(error);
    }
}