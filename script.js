// Creează o funcție care primește ca parametru un array de numere și 
// returnează valoare impara maxima din array. 
// Ex: pentru [5, 7, 2, 3, 10] returnează 7

const valoareImparaMaxima = (numere) => {
    let imparMaxim = numere[0];
    for (let i = 1; i < numere.length; i++) {
        if (numere[i] % 2 !== 0){
            imparMaxim = numere[i];
        }
    };
    for (let i = 1; i < numere.length; i++) {
        if (numere[i] % 2 !== 0 && numere[i] > imparMaxim) {
            imparMaxim = numere[i];
        }
    };
    if (imparMaxim % 2 !== 0){
        return imparMaxim;
    }
};
console.log(valoareImparaMaxima([5, 7, 2, 3, 10]));
console.log(valoareImparaMaxima([2, 4]));
console.log(valoareImparaMaxima([2,1,4]));


// Creează o funcție care primește ca parametru un array de numere și 
// returnează indexul valoarii impare maxime din array. 
// Ex: pentru [5, 7, 2, 3, 10] returnează 1

const indexImparMaxim = (numere) => {
    let imparMaxim = numere[0];
    let index = 0; 
    for (let i = 1; i < numere.length; i++) {
        if (numere[i] % 2 !== 0){
            imparMaxim = numere[i];
            index = i;
        }
    }; 
    for (let i = 1; i < numere.length; i++) {
        if (numere[i] % 2 !== 0 && numere[i] > imparMaxim) {
            imparMaxim = numere[i];
            index = i;
        }
    };
    if (imparMaxim % 2 !== 0) {
        return index;
    }
};
console.log(indexImparMaxim([5, 7, 2, 3, 10]));
console.log(indexImparMaxim([2, 4, 6]));
console.log(indexImparMaxim([2, 1, 4]));

// Creează o funcție care primește ca parametru un array de numere și 
// returnează valoare minima din array, dar nu mai mică decât zero. 
// Ex: pentru [5, -7, 2, 3, -1, 10] returnează 2

const valoareMinimaPozitiva = (numere) => {
    let minim = numere[0]; 
    for (let i = 1; i < numere.length; i++) {
        if (numere[i] >= 0 && numere[i] < minim){
            minim = numere[i];
        }
    };
    if (minim > 0) {
    return minim; 
}   
};
console.log(valoareMinimaPozitiva([5, -7, 2, 3, -1, 10]));
console.log(valoareMinimaPozitiva([-5, -7, -2, -3, -1, -10]));


// Creează o funcție care primește ca parametru un array de numere și 
// returnează diferența dintre maximul și minimul din array.

const diferentaMaximMinim = (numere) => {
    let minim = numere[0];
    let maxim = numere[0];
    for (let i = 1; i < numere.length; i++) {
        if (numere[i] < minim) {
            minim = numere[i];
        } 
        if (numere[i] > maxim) {
            maxim = numere[i];
        }
    };
    return maxim - minim;
};
console.log(diferentaMaximMinim([-1, 2, 5, 8, 10, 0]));
console.log(diferentaMaximMinim([2, 5, 8, 10, 12]));
