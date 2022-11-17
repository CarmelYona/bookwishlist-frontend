import { BookPreview } from "./book-preview";


export function BookWishList({ wishList, removeBook }) {
    var totalPrice = 0
    calcPrice()
    function calcPrice() {
        wishList.map(wish => {
            totalPrice += (+wish.price)
        })
        totalPrice = +totalPrice.toFixed(2)
    }

    return <section className="book-wish-list-container flex column">
        <div className="book flex column">
            {wishList && wishList.map((book, idx) => {
                return <BookPreview removeBook={removeBook} book={book} key={idx} />
            })}
        </div>
    </section>
}