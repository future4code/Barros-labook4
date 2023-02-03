import express, { Express } from "express"
import cors from "cors"
import { UserController } from "./controller/UserController"
import { PostController } from "./controller/PostController"
import { FriendshipController } from "./controller/FriendshipController"
import { LikeController } from "./controller/LikeController"
import { CommentController } from "./controller/CommentsController"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
   console.log("Server running on port 3003")
})


/**************************** ENDPOINTS ******************************/
const userController = new UserController();
const postController = new PostController();
const friendshipController = new FriendshipController();
const likeController = new LikeController();
const commentController = new CommentController();

app.post('/users',userController.createUser);

app.post('/post',postController.createPost);

app.post('/friendship',friendshipController.createFriendship);

app.post('/like',likeController.createLike);

app.post('/comments', commentController.createComment);

app.delete('/friendship/:id',friendshipController.deleteFriendship);

app.delete('/like/:id',likeController.deleteLike);

app.get('/posts/:id',postController.findPost);

app.get('/feeds/:id',postController.feedPost);

app.get('/feeds',postController.feedPostAll);

