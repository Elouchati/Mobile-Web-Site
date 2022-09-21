$(document).ready(function () {
  console.log("ready!");
  $.getJSON("data/A2-JSON.json", (data) => {
    console.log(data);
    const { PersonalData, Categories, BookDetail } = data;

    setStorageItem("personalData", PersonalData);

    const categories = Categories.map((category) => new Category(category));
    setStorageItem("categories", categories);

    const books = BookDetail.map((bookDetail) => new Book(bookDetail));
    setStorageItem("books", books);

    renderHeaderAndFooter(PersonalData);

    //category list
    categories.forEach((category) => {
      const { categoryGroup, logo } = category;
      const img = $("<img/>").attr({
        src: `./images/${logo}`,
      });
      const link = $("<a></a>")
        .attr({
          href: `./pages/books.html?category=${categoryGroup}`,
          class: "btn see-more",
        })
        .text("View Books")
        .on("click", (e) => {
          localStorage.setItem("selectedCategory", categoryGroup);
        });
      const categoryName = $("<p></p>")
        .addClass("name")
        .text(`Category: ${categoryGroup}`);

      const categoryItem = $("<li></li>")
        .attr({ id: categoryGroup, class: "category" })
        .append(categoryName, link, img);
      $(".categories").append(categoryItem);
    });
  });

  $("input[type=radio][name=category]").change(function () {
    console.log(this.value);
  });
});

class Category {
  constructor({ categoryGroup, logo }) {
    this.categoryGroup = categoryGroup;
    this.logo = logo;
  }
}
class Book {
  constructor({
    bookID,
    title,
    isbn,
    pageCount,
    thumbnailUrl,
    longDescription,
    authors,
    category,
  }) {
    this.bookID = bookID;
    this.title = title;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.thumbnailUrl = thumbnailUrl;
    this.longDescription = longDescription;
    this.authors = authors;
    this.category = category;
  }
}
