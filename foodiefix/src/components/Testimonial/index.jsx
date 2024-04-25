import React from 'react'
import image27 from '../../assets/images/image27.png'
import image28 from '../../assets/images/image28.png'
import image26 from '../../assets/images/image26.png'


const Testimonial = () => {
    const testimonials = [
        {
          name: 'Tony Johnson',
          testimonial: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis.',
          img:image27
        },
        {
          name: 'Jennifer Lee',
          testimonial: 'Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum.',
          img:image26
        },
        {
          name: 'Brandon Ross',
          testimonial: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.',
          img:image28
        },
      ];
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-56">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md h-full">
            <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonial;