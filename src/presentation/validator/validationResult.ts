export default interface ValidationResult {
  isValid: boolean;
  error: {
    [key: string]: boolean
  }
}