import React from "react"
import Layout from "../components/Layout"
import "../styles/error.scss"
import { Link } from "gatsby"
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <header className="error">
        <Banner title="Hum... Ce n'est pas encore ça...">
          <Link to="/" className="prmry-btn">Retour sur la Home</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
