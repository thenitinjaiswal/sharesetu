// Validate Indian phone number
export function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}
