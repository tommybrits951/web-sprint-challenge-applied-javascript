const headerContainer = document.querySelector(".header-container");

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement("div");
  const dateSpan = document.createElement("span");
  dateSpan.textContent = date;
  const titleEl = document.createElement("h1");
  titleEl.textContent = title;
  const tempEl = document.createElement("span");
  tempEl.textContent = temp;
  header.classList.add("header");
  dateSpan.classList.add("date");
  tempEl.classList.add("temp");
  header.appendChild(dateSpan);
  header.appendChild(titleEl);
  header.appendChild(tempEl);
  
  return header;
}
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const a = document.querySelector(selector);
const x = Header("This Header", "Dec 16th, 2022", "that was just the date");
a.append(x);
  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
  return a;
}

export { Header, headerAppender }
