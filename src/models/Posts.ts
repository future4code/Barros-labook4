enum TPOST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type TPost = {
    id: string,
    photo: string,
    description: string,
    type: TPOST_TYPES,
    createdAt: Date,
    authorId: string
 }