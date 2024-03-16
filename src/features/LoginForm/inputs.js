
export const inputs = {
    email: {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter email address',
        type: 'text',
        required: true,

        tester: (value)=> {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/.test(value)
        },

        errorMessage: 'Invalid email format',
        emptyError: 'Email is required',
    },

    password: {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        type: 'password',
        required: true,

        tester: (value)=> {
            return (value.length >= 8);
        },

        errorMessage: 'Password must be at least 8 characters long',
        emptyError: 'Password is required',
    },

    confirmPassword: {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Re-enter password',
        type: 'password',
        required: true,

        tester: (value1, value2)=> {
            return value1==value2;
        },

        errorMessage: 'Passwords do not match',
        emptyError: 'This field is required',
    }

}