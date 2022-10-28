import { regex } from '@utils/constants';

export const isEmail = (value) => {
    if (regex.RULE.EMAIL.test(value)) {
        return true;
    }

    return false;
};

export const isEmpty = (value) => {
    if (!value) {
        return true;
    }

    return false;
};
