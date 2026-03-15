console.log("            ")
console.log("  // Étape A1 — Définir la fonction ")
function letterFinder(word, match) {
  
}
console.log(typeof letterFinder); 

console.log("            ")
console.log("  // Étape A2 — Ajouter une boucle for ")

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    console.log("Index:", i);
  }
}letterFinder("test", "t"); 

console.log("            ")
console.log(" // Étape A3 — Accéder au caractère courant ")

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    console.log(i, currentLetter);
  }
}letterFinder("test", "t");

console.log("            ")
console.log("  // Étape A4 — Tester l’égalité  ")

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      
    }
  }
}

console.log("            ")
console.log(" // Étape A5 — Afficher “Found …”  ")

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i);
    }
  }
}

console.log("            ")
console.log("  // Étape A6 — Gérer le cas “pas trouvé ")

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}letterFinder("test", "t");



console.log("            ")
console.log(" // B2 — Version sécurisée avec validation des paramètres ")

function letterFinder(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }
  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre (1 caractère).");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

console.log("            ")
console.log(" // B3 — Variante insensible à la casse ")

function letterFinderIgnoreCase(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    console.log("Paramètres invalides.");
    return;
  }

  const w = word.toLowerCase();
  const m = match.toLowerCase();

  for (let i = 0; i < w.length; i++) {
    if (w[i] === m) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
letterFinderIgnoreCase("Test", "t");

console.log("            ")
console.log(" // B4 — Variante : retourner les positions  ")

function letterPositions(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return [];
  }

  const positions = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      positions.push(i);
    }
  }
  return positions;
}
console.log(letterPositions("test", "t")); 

console.log("            ")
console.log(" // B5 — Variante : arrêter dès la première occurrence ")

function firstLetterPosition(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return -1;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) return i;
  }
  return -1;
}
console.log(firstLetterPosition("test", "t")); 
console.log(firstLetterPosition("test", "z")); 

console.log("            ")
console.log(" // C:// Exercice 1 ")

function letterFinder(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }
  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre (1 caractère).");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
letterFinder("banana", "a"); 

console.log("            ")
console.log(" // C://Exercice 2   ")
letterFinder("hello", "z");

console.log("            ")
console.log(" // C:// Exercice 3 ")

function countLetter(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("banana", "a")); 
console.log(countLetter("hello", "z"));  
 
