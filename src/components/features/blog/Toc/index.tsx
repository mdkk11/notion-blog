'use client'

import * as React from 'react'
import * as tocbot from 'tocbot'

import classes from './Toc.module.css'

export const Toc = () => {
  React.useEffect(() => {
    tocbot.init({
      tocSelector: `.${classes.toc}`,
      contentSelector: '.content',
      headingSelector: 'h1, h2, h3, h4',
      activeLinkClass: classes.tocLinkActive,
      listClass: classes.tocList,
      linkClass: classes.tocLink,
      scrollSmoothDuration: 200,
      scrollSmoothOffset: -10,
    })

    return () => {
      tocbot.destroy()
    }
  }, [])

  return (
    <nav className={classes.root}>
      <h2 className={classes.tocTitle}>目次</h2>
      <div className={classes.toc} />
    </nav>
  )
}
