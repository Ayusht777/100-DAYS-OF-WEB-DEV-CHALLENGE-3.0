let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  { quote: "If you can dream it, you can do it.", person: `Walt Disney` },
  {
    quote:
      "The only Limit to our realization of tomorrow will be our doubts of today.",
    person: ` Franklin D. Roosevelt`,
  },
  {
    quote:
      "The best way to find out what you want in life is to try a lot of things.",
    person: `Oprah Winfrey`,
  },
  {
    quote:
      "Life is what we make it and how we make it – whether we realize it or not.",
    person: `Napoleon Hill`,
  },
  {
    quote:
      "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    person: `Stephen Chbosky`,
  },
  {
    quote:
      "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    person: `J.K. Rowling`,
  },
  {
    quote:
      "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
    person: "Charles Darwin",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
