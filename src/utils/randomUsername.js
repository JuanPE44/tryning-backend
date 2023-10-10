export function generateRandomUsername({ name }) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomUsername = name;
  for (let i = 0; i < 8; i++) {
    randomUsername += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomUsername;
}
