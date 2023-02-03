import app from "./controller/app"
import { userRouter } from "./controller/router/userRouter"
import { postRouter } from "./controller/router/postRouter"
import { friendshipRouter } from "./controller/router/FriendshipRouter"
import { likeRouter } from "./controller/router/likeRouter"
import { commentsRouter } from "./controller/router/commentsRouter"



/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter)
app.use('/post', postRouter);
app.use('/friendship', friendshipRouter);
app.use('/like', likeRouter);
app.use('/comments', commentsRouter);


