import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="La Part du Lion"
        fakeInfo="Venez comme vous êt..."
        info="Des idées de recettes pendant le confinement."
      />
    </SimpleHero>
  </Layout>
)
