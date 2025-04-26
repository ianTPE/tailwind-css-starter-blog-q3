import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

export const Warning = ({ children }) => (
  <div className="my-4 border-l-4 border-amber-500 bg-amber-100 p-4 text-amber-700">
    <p className="font-bold">警告</p>
    <p>{children}</p>
  </div>
)

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Warning,
}
