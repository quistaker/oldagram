const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


for (let i = 0; i < posts.length; i++) {
    
    const mainEl = document.createElement("main")
    const sectionEl = document.createElement("section")
    const postHeaderEl = document.createElement("div")
    const innerDivEl = document.createElement("div")
    const iconDivEl = document.createElement("div")
    const divider = document.createElement("div")
    
    const avatarEl = document.createElement("img")
    const postImageEl = document.createElement("img")
    const iconLikeEl = document.createElement("img")
    const iconCommentEl = document.createElement("img")
    const iconDMEl = document.createElement("img")
    
    const pNameEl = document.createElement("p")
    const pLocationEl = document.createElement("p")
    const likesCountEl = document.createElement("p")
    const commentEl = document.createElement("p")
    
    const textnode = document.createTextNode(posts[i].comment);
    const textLikes = document.createTextNode("likes")
    
    const likesCount = document.createElement("span")
    const nicknameEl = document.createElement("span")
    
    sectionEl.classList.add("container")
    postHeaderEl.classList.add("post-header")
    iconDivEl.classList.add("icon-container")
    divider.classList.add("divider")
    
    avatarEl.classList.add("avatar")
    avatarEl.classList.add("post-avatar")
    postImageEl.classList.add("post-image")
    iconCommentEl.classList.add("post-icon")
    iconDMEl.classList.add("post-icon")
    iconLikeEl.classList.add("post-icon-like")
    
    pNameEl.classList.add("bold")
    likesCountEl.classList.add("bold")
    nicknameEl.classList.add("bold")
    
    avatarEl.src = posts[i].avatar
    postImageEl.src = posts[i].post
    iconCommentEl.src = "images/icon-comment.png"
    iconDMEl.src = "images/icon-dm.png"
    iconLikeEl.src = "images/icon-heart.png"
    
    pNameEl.textContent = posts[i].name
    pLocationEl.textContent = posts[i].location
    likesCount.textContent = posts[i].likes
    nicknameEl.textContent = posts[i].username
    
    document.body.appendChild(mainEl)
        mainEl.appendChild(sectionEl)
            sectionEl.appendChild(postHeaderEl)
                postHeaderEl.appendChild(avatarEl)
                postHeaderEl.appendChild(innerDivEl)
                    innerDivEl.appendChild(pNameEl)
                    innerDivEl.appendChild(pLocationEl)
            sectionEl.appendChild(postImageEl)
            sectionEl.appendChild(iconDivEl)
                iconDivEl.appendChild(iconLikeEl)
                iconDivEl.appendChild(iconCommentEl)
                iconDivEl.appendChild(iconDMEl)
            sectionEl.appendChild(likesCountEl)
                likesCountEl.appendChild(likesCount)
                likesCountEl.appendChild(textLikes)
            sectionEl.appendChild(commentEl)
                commentEl.appendChild(nicknameEl)
                commentEl.appendChild(textnode)
    document.body.appendChild(divider)

    postImageEl.addEventListener("dblclick", plusLike)

    function plusLike() {
        likesCount.textContent = Number(likesCount.textContent) + 1
        postImageEl.removeEventListener("dblclick", plusLike)
    }
}
