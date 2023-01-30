import express, { Express, Request, Response } from "express"
import cors from "cors"
import { createUser } from "./endpoints/createUser"
import { createPost } from "./endpoints/createPost"
import { getPost } from "./endpoints/getPosts"
import { createFriendship } from "./endpoints/createFriendship"
import { getFriendships } from "./endpoints/getFriendships"
import { deleteFriendships } from "./endpoints/deleteFriendship"

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

app.delete('/friendship/:id',deleteFriendships);

app.get('/posts/:id',getPost);

app.get('/friendship/:id',getFriendships);

