import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.base": `"name" must be a string`,
    "string.empty": `"name" cannot be empty`,
    "string.min": `"name" should have at least 2 characters`,
    "any.required": `"name" is required`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email`,
    "any.required": `"email" is required`,
  }),
  phone: Joi.string()
    .pattern(/^[0-9+\-() ]+$/)
    .required()
    .messages({
      "string.pattern.base": `"phone" must contain only digits and symbols (+, -, (, ))`,
      "any.required": `"phone" is required`,
    }),
  password: Joi.string().min(6).max(30).required().messages({
    "string.min": `"password" should have at least 6 characters`,
    "any.required": `"password" is required`,
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
