import React from 'react'
import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Warning from './Warning'
import Tabs from './Tabs'
import Tab from './Tab'

export const components: MDXComponents = {
  Image,
  img: (props) => {
    if (!props.src) {
      return <></>;
    }
    return (
      <span className="flex items-center justify-center">
        <Image src={props.src} alt={props.alt || ""} width={500} height={500} />
      </span>
    );
  },
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Warning,
  Tabs,
  Tab,
}
