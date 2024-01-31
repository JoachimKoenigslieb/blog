'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const ActiveLink: typeof Link = ({ href, children, }) => {
	const segment = usePathname()
	const isActive = href === segment
  
	return (
		<Link href={href} className={isActive ? "font-bold" : undefined}>
			{children}
		</Link>
	)
}