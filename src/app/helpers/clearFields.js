export default (gameBoard) => {
    const fields = [ ...gameBoard.children ];
    fields.forEach(field => {
        field.style.backgroundImage = 'none';
    });
};