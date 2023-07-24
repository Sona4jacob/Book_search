function addBook(){
    bookName=bn1.value
    authorName = atr.value;
    bdetails=bd1.value
    if(bookName in localStorage){
        alert("This Book already exists")
    }
    else{
        books={bookName,authorName,bdetails}
        localStorage.setItem(bookName,JSON.stringify(books))
        alert("Book is added successfully")
    }
}
function searchBook(){
    book=bn2.value
    if(book in localStorage){
    obj=JSON.parse(localStorage.getItem(book))
    if(obj.bookName==book){
        // alert("Success")
        det.innerHTML=`Book Name :${obj.bookName}`
        det1.innerHTML=`Author Name :${obj.authorName}`
        det2.innerHTML=`Book Details:${obj.bdetails}`

    }
    else{
        det.innerHTML=`<p>Sorry!${book} does not exist</p>`
    }
}
}