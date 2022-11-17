import ReactStars from "react-rating-stars-component";

export function BookDetails({ book, setIsChecked }) {

    const stars = {
        size: 30,
        value: +book.rating,
        edit: false,
        isHalf: true
    }

    return <section className="book-details flex column">
        <div className="book-header">
            <div className="book-header-wrapper flex">
                <div className="book-title">{book.title}</div>
                <input type="checkBox" name="" id="" checked={book.isCheck} onChange={(ev) => setIsChecked(ev.target.checked, book._id)} />
            </div>
        </div>
        <div className="book-info-wrapper">
            <div className="book-author">{book.author}</div>
            <p>{book.description}</p>
            <div className="rating-wrapper flex ">
                <h5>Rating:</h5>
                <ReactStars {...stars} key={`stars_${book.rating}`} />
            </div>
            <div className="book-price">Price: ${book.price}</div>
        </div>
    </section>
}