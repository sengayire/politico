import { celebrate, Joi } from 'celebrate';

const validate = celebrate({
  body: Joi.object().keys({
    username: Joi.string()
      .required()
      .trim(),
    office: Joi.string()
      .required()
      .trim(),
    user: Joi.string().required().trim(),
  }),
});
export default validate;
