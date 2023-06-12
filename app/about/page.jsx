import AboutCard from "@components/about/AboutCard"

export const metadata = {
  title: 'About'
}

export default function About() {

  return (
    <section className="credential-area">
      <div className="container">
        <div className="gx-row d-flex">
          <AboutCard />
        </div>
      </div>
    </section>
  )
}
