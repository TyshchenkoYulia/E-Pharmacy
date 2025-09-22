import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .required()
    .messages({ "string.pattern.base": "Невірний формат номера телефону" }),
  password: Joi.string()
    .min(6)
    .max(50)
    .pattern(/[!@#$%^&*(),.?":{}|<>]/)
    .required()
    .messages({
      "string.pattern.base":
        "Пароль має містити хоча б один спеціальний символ",
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
