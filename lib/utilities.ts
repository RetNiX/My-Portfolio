// Handle a validation error in the contact form
export const validateString = (value: unknown, maxLength : number): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
}
// Handle all the error message in contact form
export const getErrorMessage = (error : unknown) : string => {
    let msg : string;
    if (error instanceof Error) {
        msg = error.message
    } else if (error && typeof error === "object" && "message" in error) { // if there is an error, an the type of error is an object and it has a message property
        msg = String(error.message);
    } else if (typeof error === "string") {
        msg = error;
    } else {
        msg = "Something went wrong.";
    }
    return msg;
}