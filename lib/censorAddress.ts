export const censorAddress = (address:String ) => {
  // Extract the first and last four characters of the address
  const prefix = address.slice(0, 4);
  const suffix = address.slice(-4);

  // Replace the middle characters with asterisks
  const middle = "***";

  // Concatenate the censored address and return it
  return prefix + middle + suffix;
};
