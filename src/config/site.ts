import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "KELELE",
  author: "KELELE",
  description: "Streaming service based in Kenya",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https:///kelele.co.ke",
  },
  links: {
    github: "https:///kelele.co.ke",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
