export const helpFilterNumber = (text) => {
    const regex = /(\d+)$/;
    const matches = text.match(regex);
    
    if (matches) {
      const number = matches[1];
      return number
    }
}