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

const root = document.getElementById("root");


function getPosts(){
    let template =""
    posts.forEach((item) => {
        template += 
        `
            <section>
                <div class="container">
                    <div class="flex user-info">
                        <img class="avatar" src="${item.avatar}" alt="${item.name}"/>
                        <p><span class="bold">${item.name}</span><br />${item.location}</p>
                    </div>
                    <img class="portrait" alt="Portrait of ${item.name}" src="${item.post}" />
                    <div class="flex">
                        <img class="icons" src="images/icon-heart.png" />
                        <img class="icons" src="images/icon-comment.png" />
                        <img class="icons" src="images/icon-dm.png" />
                    </div>
                    <div class="comment-section">
                        <p><span class="bold">${item.likes} likes</span></p>
                        <p><span class="bold">${item.username}</span> ${item.comment}</p>
                    </div>
                </div>
            </section>
        `
    })

    root.innerHTML = template;
}

getPosts();