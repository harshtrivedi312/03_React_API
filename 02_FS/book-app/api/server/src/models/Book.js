
module.exports = (sequilize, Datatypes) => {

    const Book = sequilize.define('Book', {
        title: {
            type: Datatypes.STRING, allowNull: false
        },
        price: {
            type: Datatypes.STRING, allowNull: false
        },
        description: {
            type: Datatypes.STRING, allowNull: false
        }

    })
    return Book;
}

