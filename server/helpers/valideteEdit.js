import { celebrate, Joi } from 'celebrate';


const validate = celebrate({
  body: Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().min(3).max(20).required()
      .trim(),
    hqAddress: Joi.string().required().trim(),
    logoUrl: Joi.string().required().trim(),
  }),
});
export default validate;
