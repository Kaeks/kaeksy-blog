import "./blog.css";

const articles = import.meta.glob("/blog/*/index.html");
console.log(articles);