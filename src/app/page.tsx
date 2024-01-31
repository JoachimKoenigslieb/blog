import { PostThumb } from "./PostThumb";
import { getAllPostsSlug } from "./getAllPostsSlug";

export default function Home() {
	const posts = getAllPostsSlug()

  return (
	<>
		<h1>
			Hello
		</h1>
		<p>
			And welcome to my blog!
		</p>
		<p>
			I write about all kinds of stuff related to computing!
		</p>
		<div className="flex flex-wrap gap-4">
			{posts.map(post => (
				<PostThumb post={post} key={post.slug} />
			))}
		</div>
	</>
  );
}
