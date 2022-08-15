const quoteText = document.getElementById('quote-text');
const quoteTags = document.getElementById('quote-tags');
const quoteAuthor = document.getElementById('quote-author');
const genQuoteBtn = document.getElementById('gen-quote-btn');

async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteText.innerHTML = data.content;
    quoteAuthor.innerHTML = `--${data.author}`;
    quoteTags.innerHTML = data.tags;
}

updateQuote();

genQuoteBtn.addEventListener('click', () => {
    updateQuote();
});