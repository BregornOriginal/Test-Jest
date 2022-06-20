function capitalize(string){ 

  const firstLetterCapitalize = string.charAt(0).toUpperCase() + string.slice(1);

  return firstLetterCapitalize;
};

module.exports = capitalize;
