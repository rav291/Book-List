class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }


}

class UI {
    addBookToList(book) {
        const list = document.getElementById("book-list");
        // create tr element
        const row = document.createElement("tr");
        // insert columns
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="" class ="delete">X</a></td>`;
        list.appendChild(row);
    }

    showAlert(message, className) {
        // create div
        const div = document.createElement("div");
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector(".container");
        // Get form
        const form = document.querySelector("#book-form");
        // Insert alert
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === "delete")
            target.parentElement.parentElement.remove();
    }

    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}


//Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
    // Get form values
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === "" || author === "" || isbn === "")
        ui.showAlert("Please fill all the fields", "error");
    else {
        ui.addBookToList(book);

        ui.showAlert("Book added!", "success");

        ui.clearFields();
    }
    e.preventDefault();
});

// Eventlistener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
    const ui = new UI();

    ui.deleteBook(e.target);

    // show message

    ui.showAlert("Book deleted", "success");
    e.preventDefault();
});
