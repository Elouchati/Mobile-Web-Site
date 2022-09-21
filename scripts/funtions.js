function renderHeaderAndFooter(personalData) {
  //header section
  const headerLine1 = $("<p></p>")
    .html("SYST24444 / Assignment #2 / Winter 2022")
    .css({ color: "green", margin: "10px" });
  const headerLine2 = $("<p></p>")
    .append(
      $("<span></span>").addClass("name").text(`${personalData.FullName}`),
      $("<span></span>").addClass("slash").text(" / "),
      $("<span></span>")
        .addClass("student-id")
        .text(`${personalData.StudentID}`)
    )
    .css({ margin: "10px" });
  $("header")
    .append(headerLine1, headerLine2)
    .css({ padding: "2px 10px", textAlign: "center" });

  //footer section
  $("footer")
    .append(
      $("<p></p>").addClass("name").html(`
        <b>My Sheridan User Name:</b>
        <span class="value">${personalData.UserName}</span>
      `),
      $("<p></p>").addClass("program").html(`
        <b>My Program:</b>
        <span class="value">${personalData.Program}</span>
      `)
    )
    .css({ padding: "2px 10px", textAlign: "center" });
}

function getStorageItem(item) {
  return JSON.parse(localStorage.getItem(item));
}

function setStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}