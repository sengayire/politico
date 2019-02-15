import { celebrate, Joi } from 'celebrate';

const validate = celebrate({
  body: Joi.object().keys({
    type: Joi.string()
      .valid('federal', 'legislative', 'state', 'local government')
      .required()
      .trim(),
    name: Joi.string().required().trim(),
  }),
});
export default validate;
