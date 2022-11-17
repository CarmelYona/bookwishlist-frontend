import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"
import { BookDetails } from "./book-details"
import { BookWishList } from "./book-wish-list"
import { SlArrowRight } from "react-icons/sl"
import { SlArrowLeft } from "react-icons/sl"

export const BookApp = () => {
    const [books, setBooks] = useState(null)
    const [page, setPage] = useState(0)
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    const getPage = (diff) => {
        if (page === 0 && diff === -1 || page === books.length - 1 && diff === 1) return
        const currPage = page + diff
        setPage(currPage)
    }

    const loadBooks = async () => {
        const books = await bookService.query()
        setBooks(books)
        getWishList()
    }

    const setIsChecked = async (val, bookId) => {
        const newBooks = await bookService.updateBook(val, bookId)
        setBooks(newBooks)
        loadBooks()
    }

    const getWishList = async () => {
        const newWishList = await bookService.setWishList()
        setWishList(newWishList)
    }

    const removeBook = (bookId) => {
        setIsChecked(false, bookId)
    }

    if (!books) return <div>Loading..</div>
    return <section className="book-app flex">
        <div className="book-card-container flex">
            <button className={page === 0 ? "not-allowed" : ""} onClick={() => getPage(-1)} ><SlArrowLeft /></button>
            <BookDetails book={{ ...books[page] }} setIsChecked={setIsChecked} />
            <button className={page === books.length - 1 ? "not-allowed" : ""} onClick={() => getPage(1)} ><SlArrowRight /></button>
        </div>
        <div className="book-wish-list-container flex">
            <BookWishList removeBook={removeBook} wishList={wishList} />
        </div>

    </section>
}
