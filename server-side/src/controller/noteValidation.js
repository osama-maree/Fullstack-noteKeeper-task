import Joi from "joi";

export const AddNoteValidation = {
  body: Joi.object()
    .required()
    .keys({
      title: Joi.string().min(5).required(),
      content: Joi.string().min(5).required(),
    }),
};
export const DeleteNoteValidation = {
  params: Joi.object()
    .required()
    .keys({
      id: Joi.string().min(24).max(24).required(),
    }),
};
export const UpdateNoteValidation = {
  body: Joi.object()
    .required()
    .keys({
      title: Joi.string().min(5).required(),
      content: Joi.string().min(5).required(),
    }),
  params: Joi.object()
    .required()
    .keys({
      id: Joi.string().min(24).max(24).required(),
    }),
};
export const QueryNoteValidation = {
  query: Joi.object().required().keys({
    page: Joi.number().required(),
    size: Joi.number().required(),
  }),
};
