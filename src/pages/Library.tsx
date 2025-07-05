import { useState } from "react";
import { Link } from "react-router-dom";

export default function Library() {
  const [comments, setComments] = useState<string[]>([
    "例: 試験期間中はめちゃくちゃ混むよね",
  ]);
  const [newComment, setNewComment] = useState("");
  return (
    <>
      <h1 className="text-2xl">駒場図書館についての説明</h1>
      <ul className="list-disc list-inside">
        {comments.map((comment) => (
          <li>{comment}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComments([...comments, newComment]);
          setNewComment("");
        }}
      >
        <input
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <button type="submit">投稿</button>
      </form>
      <Link to="/">マップに戻る</Link>
    </>
  );
}
