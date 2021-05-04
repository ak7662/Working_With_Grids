

/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

async function getCategories(){
    return await fetch("https://jservice.io/api/categories?count=4&offset=4")
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err))
}

getCategories().then(categories =>{
    // console.log(categories)
    const myCategoryTitle = categories.map(category => `<div class="my-category-title">${category.title}</div>
    <div class="my-category-clue" style="grid-row-start:2">$100</div>
    <div class="my-category-clue" style="grid-row-start:3">$200</div>
    <div class="my-category-clue" style="grid-row-start:4">$300</div>
    <div class="my-category-clue" style="grid-row-start:5">$400</div>
    `).join('')
    console.log(myCategoryTitle)
    document.body.innerHTML = `
        <div class="board">
            ${myCategoryTitle}
        </div>
    `
})