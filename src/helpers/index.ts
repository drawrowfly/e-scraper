/* eslint-disable no-throw-literal */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/**
 * Validate input values
 * @param entry
 */
export const entryValidator = (entry: { [key: string]: { value: any; condition: any; required: boolean } }) => {
    for (const item in entry) {
        if (entry[item].required && !entry[item].value) {
            throw `Missing ${item}`;
        }
        if (typeof entry[item].condition === 'number') {
            if (typeof entry[item].value !== 'number') {
                throw `${item} can only be a number`;
            }

            if (entry[item].condition && entry[item].value > entry[item].condition) {
                throw `Max ${item} value is: ${entry[item].condition}`;
            }
        }
    }
};
