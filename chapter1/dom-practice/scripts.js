//11111111111111111//
document.querySelector("article__header").textContent = "Welcome to my weirasdfasdfasdf"

//222222222222222//
const allArticleHeaders = document.querySelectorAll('.article_header')
for (let index = 0; index < allArticleHeaders.length; index++) {
    const element = allArticleHeaders[index];
    element.classlist = "article__header important";
}

//3333333333333333333//
