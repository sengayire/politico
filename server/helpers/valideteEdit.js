import { celebrate, Joi } from 'celebrate';


const validate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(3).max(20).required()
      .trim(),
  }),
});
export default validate;
