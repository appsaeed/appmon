/**
 * mail validator
 * @param email
 * @returns
 */
export function isMail(email) {
    return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
export function isErrorFiled(name, value, options = { required: true }) {
    const min = options?.min || 0;
    const max = options?.min || 0;
    const fieldname = name.toString().trim();
    if (!value && options?.required) {
        return `The ${fieldname} field is required`;
    }
    else if (options?.email && !isMail(String(value))) {
        return `The email address is not valid: ${value}`;
    }
    else if (Number(value) < min) {
        return `The ${fieldname} field is required at least ${value}`;
    }
    else if (Number(value) > max) {
        return `The ${fieldname} field is riched max ${value}`;
    }
    return false;
}
export const isPhoneNumber = (phone) => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
