

export function BookPreview({ book, removeBook }) {
    return <section className="book-preview flex">
        <div className="book-header flex">
            <div className="divider"></div>
            <div className="book-title flex">{book.title}</div>
        </div>
        <div className="btn-wrapper">
            <button onClick={() => removeBook(book._id)} className="remove-wish">x</button>
        </div>
    </section>
}