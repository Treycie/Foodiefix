import React from 'react'


const Testimonial = () => {
    const testimonials = [
        {
          name: 'Tony Johnson',
          testimonial: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis.',
        },
        {
          name: 'Jennifer Lee',
          testimonial: 'Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum.',
        },
        {
          name: 'Brandon Ross',
          testimonial: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.',
        },
      ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-extrabold text-gray-900">Testimonials</h2>
        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="carousel">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white px-6 py-8 rounded-md shadow-md">
                  <p className="text-gray-600">{testimonial.testimonial}</p>
                  <div className="flex items-center mt-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://via.placeholder.com/40"
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;