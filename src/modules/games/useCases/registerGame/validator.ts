import {Joi, Segments} from "celebrate"
import { customMessage } from "../../../../utils/errors"
const registerValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages(customMessage('Nome')),
    designer: Joi.string().required().messages(customMessage('Designer')),
    platform: Joi.string().required().messages(customMessage('Platform')),
    developer: Joi.string().required().messages(customMessage('Developer')),
    releaseData: Joi.string().required().messages(customMessage('ReleaseData')),
    mode: Joi.string().required().messages(customMessage('Mode')),
    genre: Joi.string().required().messages(customMessage('Genre')),
  })
}

export { registerValidator }