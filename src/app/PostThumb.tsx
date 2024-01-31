import Link from "next/link"
import { Post } from "./getAllPostsSlug"

export const PostThumb = (props: { post: Post, }) => {
	const { post, } = props

	return (
		<Link href={post.path} className="p-4 bg-slate-300 rounded-lg">
			<h2>
				{post.title}
			</h2>
		</Link>
	)
}