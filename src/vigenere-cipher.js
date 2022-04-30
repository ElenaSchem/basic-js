const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    message = message.toUpperCase();

    let keyCode = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).split('');

    let abcLength = 26;
    let res = [];

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 91) {
        res.push(String.fromCharCode(65 + ((message.charCodeAt(i) + keyCode[0].charCodeAt(0)) % abcLength)));
        keyCode.shift();
      } else {
        res.push(message.charAt(i));
      }
    }

    if (this.type === false) return res.reverse().join('');
    return res.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    encryptedMessage = encryptedMessage.toUpperCase();

    let keyCode = key.toUpperCase().repeat(Math.ceil(encryptedMessage.length / key.length)).split('');

    let abcLength = 26;
    let res = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 91) {
        res.push(String.fromCharCode(65 + ((encryptedMessage.charCodeAt(i) + abcLength - keyCode[0].charCodeAt(0)) % abcLength)));
        keyCode.shift();
      } else {
        res.push(encryptedMessage.charAt(i));
      }
    }

    if (this.type === false) return res.reverse().join('');
    return res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
