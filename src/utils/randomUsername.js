export function generateRandomUsername() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomUsername = "username";
  for (let i = 0; i < 8; i++) {
    randomUsername += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomUsername;
}
