import { storageService } from './async-stoarge.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'books'
var gBooks

export const bookService = {
    query,
    getById,
    save,
    getCurrBook,
    updateBook,
    setWishList
}
window.cs = bookService

function getCurrBook() {
    return gBooks
}

async function query() {
    // gBooks = await storageService.query(STORAGE_KEY)
    gBooks = await httpService.get('book')
    return gBooks
}

async function getById(bookId) {
    // return await storageService.get(STORAGE_KEY, bookId)
    return httpService.get(`book/${bookId}`)
}

async function updateBook(val, bookId) {
    const idx = gBooks.findIndex(book => book._id === bookId)
    gBooks[idx].isCheck = val
    await save(gBooks[idx])
    return gBooks
}

async function save(book) {
    await httpService.put(`book/${book._id}`, book)
    // const newBooks = await storageService.post(STORAGE_KEY, books)
    // return newBooks
}

async function setWishList() {
    var wishList = []
    gBooks.map(book => {
        if (book.isCheck) {
            wishList.push(book)
        }
    })
    return wishList
}

