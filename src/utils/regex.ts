export const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[\W_]).{8,}$/
export const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
export const cepRegex = /^\d{5}-\d{3}$/;
export const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
export const numberRegex = /^([A-Za-z]?\d{1,6}|\d{1,6}[A-Za-z]?)$/;
export const priceRegex = /^\d+(\.\d{1,2})?$/;
export const promoRegex = /^(100|[1-9][0-9]?)$/;