function getUniqueSortedCharacters(str) {
    const uniqueCharacters = [...new Set(str)];
    return uniqueCharacters.sort();
}
