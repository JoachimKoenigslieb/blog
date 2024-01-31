import { readdirSync, statSync } from "fs"
import { RouteType } from "next/dist/lib/load-custom-routes"

type routes = __next_route_internal_types__.RouteImpl<RouteType>
export const getAllPostsSlug = () => {
	const path = './src/app/posts' 

	const files = readdirSync(path)
	
	const posts = files.filter(file => statSync(`${path}/${file}`).isDirectory()).map(slug => {
		const title = slug.split('/').at(-1)?.replaceAll('-', ' ')

		if (title === undefined) {
			throw new Error(`Could not parse page with slug ${slug} to get its title.`)
		}

		return {
			path: `/posts/${slug}` as routes,
			slug,
			title,
		}
	}) 

	return posts
}

export type Post = ReturnType<typeof getAllPostsSlug>[number]