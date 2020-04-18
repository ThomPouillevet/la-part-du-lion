import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="La Part du Lion"
        fakeInfo="Venez comme vous êt..."
        info="Le plaisir de la cuisine maison."
      />
    </SimpleHero>
  </Layout>
)
