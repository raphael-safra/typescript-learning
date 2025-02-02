/**
 * Fonction qui prend en paramètre un tableau d'entiers positifs et retourne le premier.
 * 
 * Retourne -1 si le tableau est vide.
 */
export function getFirstNumber(array: number[]): number {
    if (array.length > 0) {
        return array[0];
    } else {
        return -1;
    }
}

/**
 * Retourne le dernier élément d'un tableau de string
 * 
 * @param songs Liste de chansons
 * @returns La dernière chaîne de caractères
 */
export function getLastSongPlayed(songs: string[]): string {
    return songs[songs.length - 1];
}

/**
 * Retrouve le mot le plus long d'un tableau de strings.
 * 
 * Afin de retrouver le mot le plus long vous pouvez utiliser une approche basée sur "reduce".
 * 
 * Pour apprendre à vous servir de "reduce" : https://medium.com/free-code-camp/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#720b
 */
export function findLongestWord(words: string[]): string {

    let longestWord = words.reduce((result: string, current: string) => {
        if (current.length > result.length) {
            return current;
        } else {
            return result;
        }
    }, "")

    return longestWord;
}

/**
 * Crée et initialise un tableau avec une valeur par défaut.
 * 
 * @param length La taille du tableau à créer (number)
 * @param defaultValue La valeur par défaut (string)
 */
export function fillArrayWithDefaultValue(length: number, defaultValue: string): number[] {
    let result = new Array(length).fill(defaultValue);
    return result;
}

/**
 * Trie un tableau de chaînes de caractères par taille croissante de chaîne.
 * 
 * Pour trier le tableau vous pourrez utiliser la méthode "sort()" associée à une fonction de comparaison : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
 * 
 * Attention : la fonction doit renvoyer un NOUVEAU TABLEAU et non pas celui passé en paramètre. Comment faire ?
 * 
 * @param arrayToSort Le tableau de chaînes de caractères à trier
 * @returns Le tableau trié
 */
export function sortBySize(arrayToSort: string[]): string[] {
    //
    let sorted: string[] = [...arrayToSort].sort((s1, s2) => {
        if (s1.length < s2.length) {
            return -1;
        } else {
            return 1;
        }
    });
    return sorted;
}

// ----------- TABLEAUX AVEC DES UNIONS -----------

/**
 * Additionne les éléments d'un tableau qu'ils soient de type "number" ou "string".
 * 
 * @param array Utilisation d'un tableau avec types multiples : https://www.geeksforgeeks.org/defining-array-with-multiple-types-in-typescript/
 * @returns Le résultat de la somme de type "number"
 */
export function sumStringsAndNumbers(array: (string | number)[]): number {

    let result = 0;
    for (let num of array) {

        if (typeof num == "number") {
            result += num;
        } else {
            result += Number.parseInt(num);
        }
    }
    return result;
}

/**
 * Traite un tableau pouvant contenir des "string" mais également des éléments "null".
 * Cette fonction est chargée de supprimer toutes les valeurs null et de garder les "srings".
 * 
 * Pro-tip : renseignez vous sur la fonction "filter" : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *  
 * @param array Un tableau pouvant contenir des "string" mais également des éléments "null"
 * @returns Tableau de chaînes de caractères résultat
 */
export function stringsOnly(array: (string | null)[]): string[] {
    const newArray = array.filter((e) => e !== null);
    return newArray;
 }

// ----------- TUPLES -----------

/**
 * Transforme un tuple contenant des informations d'utilisateur en un nom d'utilisateur arbitraire.
 * 
 * Par exemple :
 * - generateUsername(['John', 'Smith', 1980]) doit retourner 'smithjo_1980'
 * - generateUsername(['Bobby', 'Fallon', 1995]) should return 'fallonbo_1995'
 * 
 * @param userInfo Un tuple contenant les informations utilisateur
 * @returns Le nom utilisateur généré.
 */
export function generateUsername(userInfo: [string, string, number]): string {
    const userName = `${userInfo[1].toLowerCase()}${userInfo[0].slice(0, 2).toLowerCase()}_${userInfo[2]}`;
    return userName;
}

/**
 * Enum utilisée pour définir 4 points cardinaux
 */
export enum Direction {
    North,
    South,
    East,
    West
}

// getNextMapCoord should return the next coordinate in the direction specified
// e.g. getNextMapCoord([0, 0], 'N') should return [0, 1]
// e.g. getNextMapCoord([0, 0], 'S') should return [0, -1]
// e.g. getNextMapCoord([0, 0], 'E') should return [1, 0]
// e.g. getNextMapCoord([0, 0], 'W') should return [-1, 0]

/**
 * Déplace un point sur un carte 2D (repère orthonormé)
 *
 *        ^ N
 *        |
 *        |
 * W <--[0, 0]--> E 
 *        |
 *        |
 *        S
 * 
 * Par exemple :
 * - getNextMapCoord([0, 0], Direction.North) doit retourner [0, 1]
 * - getNextMapCoord([0, 0], Direction.East)doit retourner [1, 0]
 * 
 * @param coordinates Tuple contenant des coordonnées le premier élément est la position sur l'axe des abscisses, la seconde sur l'axe des ordonnées
 * @param direction Enum présentant une direction (North, South, East, West)
 * @returns Les nouvelles coordonnées
 */
export function getNextMapCoord(coordinates: [number, number], direction: Direction): [number, number] { 
    let result = coordinates;
    switch (direction) {
        case Direction.North:
            result[1] += 1;
            return result;
        case Direction.South:
            result[1] -= 1;
            return result;
        case Direction.East:
            result[0] += 1;
            return result;
        case Direction.West:
            result[0] -= 1;
            return result;
    }
}
