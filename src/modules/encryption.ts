interface Secret {
  a: string;
  e: string;
  i: string;
  o: string;
  u: string;
}

type SecretKey = keyof Secret;

const code: Secret = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const encryptText = (text: string) => {
  let output = "";
  for (const letter of text) {
    if (letter in code) {
      output += code[letter as SecretKey];
    } else {
      output += letter;
    }
  }
  return output;
};

const decryptText = (text: string) => {
  let output = text.slice();
  for (const c in code) {
    const currentEncryption = code[c as SecretKey];
    if (text.includes(currentEncryption)) {
      output = output.replaceAll(currentEncryption, c);
    }
  }
  return output;
};

export { encryptText, decryptText };
