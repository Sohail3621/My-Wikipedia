async function loadArticles() {
    try {
        const response = await fetch('articles.json'); // Fetch JSON file
        const data = await response.json(); // Convert response to JSON
        displayArticles(data.articles);
    } catch (error) {
        console.error("Failed to load articles.json. Check if the file exists!", error);
    }
}

function displayArticles(articleList) {
    const list = document.getElementById('article-list');
    list.innerHTML = ''; // Clear existing list

    articleList.forEach(article => {
        const li = document.createElement('li');
        const formattedTitle = formatTitle(article);
        li.innerHTML = `<a href="articles/${article}.html">${formattedTitle}</a>`;
        list.appendChild(li);
    });
}

function formatTitle(article) {
    return article.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

// Load articles from JSON when the page loads
document.addEventListener("DOMContentLoaded", loadArticles);
