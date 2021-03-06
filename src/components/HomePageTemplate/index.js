import React from 'react'
import Helmet from 'react-helmet'
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  heading,
  description,
  image,
  // offerings,
  meta_title,
  meta_description,
  // testimonials,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero bg-hero is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-12'>
                <div className='section'>
                  <h1 className='title primary-text has-text-centered'>
                    {title}
                  </h1>
                  <h1 className='has-text-centered is-size-4 has-text-white'>Software Developer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <div className='section'>
            <div className='columns'>
              {/* <div> */}
              <div className='column is-6'>
                <p className='has-text-centered'>
                  <img alt={title} src={image} />
                </p>
              </div>
              <div className='content column is-6'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2 has-text-white'>
                    {heading}
                  </h3>
                  <p className='has-text-white'>{description}</p>
                </div>
                {/* <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  // offerings: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // testimonials: PropTypes.array,

}

export default HomePageTemplate
