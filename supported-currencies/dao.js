import model from "./model.js";
export const createCurrency = (currency) => model.create(currency);
export const findAllCurrencies = () => model.find();
export const findCurrencyById = (currencyId) => model.findById(currencyId);
export const findCurrencyByValue = (value) => model.findOne({ value: value });
export const deleteCurrency = (value) => model.deleteOne({ value: value });
