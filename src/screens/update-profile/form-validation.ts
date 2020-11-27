import * as yup from "yup";
import { translate } from "i18n";

export const formValidator = () => yup.object().shape({
    name: yup.string()
        .required(translate('validation.fieldRequired')),
    bio: yup.string()
        .optional(),
});