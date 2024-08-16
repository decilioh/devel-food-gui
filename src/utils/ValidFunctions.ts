export function isValidCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) return false;

    let baseLength = cnpj.length - 2;
    let baseDigits = cnpj.substring(0, baseLength);
    let checkDigits = cnpj.substring(baseLength);

    let sum = 0;
    let weight = baseLength - 7;
    for (let i = baseLength; i >= 1; i--) {
        sum += parseInt(baseDigits.charAt(baseLength - i)) * weight--;
        if (weight < 2) weight = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(checkDigits.charAt(0))) return false;

    baseLength++;
    baseDigits = cnpj.substring(0, baseLength);
    sum = 0;
    weight = baseLength - 7;
    for (let i = baseLength; i >= 1; i--) {
        sum += parseInt(baseDigits.charAt(baseLength - i)) * weight--;
        if (weight < 2) weight = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(checkDigits.charAt(1))) return false;

    return true;
}
