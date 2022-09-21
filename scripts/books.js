$(document).ready(function () {
  console.log("books");
  const selectedCategory = localStorage.getItem("selectedCategory");
  const personalData = getStorageItem("personalData");
  const categories = getStorageItem("categories");
  const books = getStorageItem("books");
  const selectedCategoryBooks = books.filter(
    (book) => book.category === selectedCategory
  );

  renderHeaderAndFooter(personalData);

  $(".list-heading").text(`Books from the ${selectedCategory} Category`);

  selectedCategoryBooks.forEach((book) => {
    const bookItem = $("<li></li>").addClass("book");

    const thumbnailContainer = $("<div></div>").addClass("thumbnail-container")
      .html(`
      <a href="${book.thumbnailUrl}" target="_blank">
        <img src="${book.thumbnailUrl}" alt="Book: ${book.title}"/>
      </a>
    `);

    const info = $("<div></div>").addClass("info");
    const title = $("<h3></h3>").addClass("title").text(`Title: ${book.title}`);
    const authors = $("<p></p>")
      .addClass("authors")
      .html(`<b>Authors:</b> ${book.authors}`);
    const pageCount = $("<p></p>")
      .addClass("page-count")
      .html(`<b>Page:</b> ${book.pageCount}`);
    const description = $("<p></p>")
      .addClass("description")
      .html(`<b>Description:</b> ${book.longDescription}`)
      .hide();
    const descriptionToggler = $("<p></p>")
      .addClass("toggle-description")
      .text(`Show Description`)
      .on("click", (e) => {
        console.log(e.target.classList.contains("show"));
        if (e.target.classList.contains("hide")) {
          descriptionToggler
            .text("Show Description")
            .removeClass("hide")
            .addClass("show");
        } else {
          descriptionToggler
            .text("Hide Description")
            .removeClass("show")
            .addClass("hide");
        }
        description.toggle("show").addClass("show");
      });
    info.append(title, authors, pageCount, descriptionToggler, description);

    bookItem.append(thumbnailContainer, info);
    $(".books").append(bookItem);
  });
});
