// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomepagePage = () => {
  return (
    <>
      <Metadata title="Homepage" description="Homepage page" />

      <h1>HomepagePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomepagePage/HomepagePage.tsx</code>
      </p>
      {/*
          My default route is named `homepage`, link to me with:
          `<Link to={routes.homepage()}>Homepage</Link>`
      */}
    </>
  )
}

export default HomepagePage
