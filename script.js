  const textArea = document.querySelector('.text-area');
  const message = document.querySelector('.message-area');


function btnEncrypt() {
  const textEncrypted = encrypt(textArea.value);
  message.value = textEncrypted;
  textArea.value = '';  
}

function encrypt(stringEncrypted) {
  let matrixCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ];
  stringEncrypted = stringEncrypted.toLowerCase();

  for(let i = 0; i < matrixCode.length; i++) {
    if(stringEncrypted.includes(matrixCode[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(matrixCode[i][0], matrixCode[i][1]);
   }
  }
  return stringEncrypted;
}

function btnDecrypt() {
  const textEncrypted = decrypt(textArea.value);
  message.value = textEncrypted;
  textArea.value = '';  
}

function decrypt(stringDecrypted) {
  let matrixCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ];
  stringDecrypted = stringDecrypted.toLowerCase();

  for(let i = 0; i < matrixCode.length; i++) {
    if(stringDecrypted.includes(matrixCode[i][1])) {
      stringDecrypted = stringDecrypted.replaceAll(matrixCode[i][1], matrixCode[i][0]);
   }
  }
  return stringDecrypted;
}

function copyText() {
 
  let text = document.querySelector('.message-area');
  text.select();
  document.execCommand('copy');
  message.value = '';
  document.querySelector('.text-area').focus();
}