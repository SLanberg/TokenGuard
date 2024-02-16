export const isPasswordValid = (password: string): boolean => {
	// Check for minimum length
	if (password.length < 12) return false;

	// Check for complexity
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumber = /[0-9]/.test(password);
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
};
