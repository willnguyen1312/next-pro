import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/DatePickerWithRange"
import { ToastSimple } from "@/components/ToastDemo"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Avatar>
          <AvatarImage
            src="https://github.com/willnguyen1312.png"
            alt="@nam.nguyen.node"
          />
          <AvatarFallback>NN</AvatarFallback>
        </Avatar>

        <DatePickerWithRange />

        <ToastSimple />

        <div className="w-[450px]">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="https://avatars.githubusercontent.com/u/17794897?v=4"
              alt="Avatar"
              fill
              className="rounded-md"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
