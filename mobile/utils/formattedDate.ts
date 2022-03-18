function formattedDate(date: string) {
    const parsedDate = Date.parse(date);
    const localeDate = new Date(parsedDate).toLocaleDateString('fr-FR');
    return localeDate;
}

export default formattedDate;