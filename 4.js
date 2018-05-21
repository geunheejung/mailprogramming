const f = ([...texts]) => {
  if (texts.length % 2 === 0) return false;

  const textsLen = texts.length;
  const beforeTexts = JSON.stringify(texts.slice(0, textsLen / 2)),
        afterTexts = JSON.stringify(texts.slice((textsLen / 2) + 1, textsLen).reverse());

  return beforeTexts === afterTexts;
}

console.log(f('12421'));