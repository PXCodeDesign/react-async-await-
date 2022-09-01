const { default: axios } = require("axios")



async function getData(){
    const user = await axios("https://jsonplaceholder.typicode.com/users")
    console.log(user.data[0])
    const posts = await axios("https://jsonplaceholder.typicode.com/posts?userId=1")
    console.log(posts.data[0])
}
getData()