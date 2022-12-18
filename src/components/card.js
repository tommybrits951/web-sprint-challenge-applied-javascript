import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
    const card = document.createElement("div");
    card.classList.add("card");
    const headline = document.createElement("div")
    headline.classList.add("headline");
    headline.textContent = article.headline;
    card.appendChild(headline);
    const author = document.createElement("div");
    author.classList.add("author");
    const imgCont = document.createElement("div");
    imgCont.classList.add("img-container");
    const image = document.createElement("img")
    image.src = article.authorPhoto;
    imgCont.appendChild(image);
    author.appendChild(imgCont);
    card.appendChild(author);
    const authorName = document.createElement("span");
    authorName.textContent = article.authorName;
    author.appendChild(authorName);
    return card;

}

const cardAppender = (selector) => {
  // TASK 6
  axios.get("http://localhost:5001/api/articles") 
  .then(res => {
    const names = ["bootstrap", "javascript", "jquery", "node", "technology"];
    console.log(res.data.articles)
    const x = document.querySelector(selector);  
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < res.data.articles[names[i]].length; j++) {
           const a = Card(res.data.articles[names[i]][j]);
           console.log(a)
           x.append(a);
        }
      }

  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => console.log("Finally Done"));
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  
}

export { Card, cardAppender }
