import express, { Express, Request, Response } from "express"
import cors from "cors"
import { createUser } from "./endpoints/createUser"
import { createPost } from "./endpoints/createPost"
import { getPost } from "./endpoints/getPosts"
import { createFriendship } from "./endpoints/createFriendship"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
   console.log("Server running on port 3003")
})


/**************************** ENDPOINTS ******************************/
app.post('/users',createUser);

app.post('/post',createPost);

app.post('/friendship',createFriendship);

app.get('/posts/:id',getPost);

