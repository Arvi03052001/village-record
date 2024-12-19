export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

export const validatePincode = (pin: string): boolean => {
  const pinRegex = /^[0-9]{6}$/;
  return pinRegex.test(pin);
};