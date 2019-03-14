import { CommentInputType } from '../types/Comment';
import {fakeDatabase as database} from '../../FakeDatabase';

export default {
  addComment: {
    type: Post,
    description: "Post a new Comment for a Blog Post",
    args: {
      comment: { type: CommentInputType }
    },
    resolve: function(parent, {comment}) {
      return database.addNewComment(comment);
    }
  }
}