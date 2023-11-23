import React from 'react'
import Image from 'next/image'

import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <Image src="/audaceslogo.png" alt="Audaces logo" width={175.33} height={38} />  ,
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  primaryHue: 203
}

export default config
