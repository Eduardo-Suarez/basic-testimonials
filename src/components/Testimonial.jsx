import "./testimonial.css"

export const Testimonial = () => {
  return (
    <>
        <div className="testimonial-container">
            <div className="testimonial-main">
                <img className="testimonial-photo" src="./images/testimonio-emma.png" alt="photo-profile" />
                <h2 className="testimonial-name">Anna Marquez</h2>
            </div>

            <div className="testomonial-content">
                <p className="testimonial-starts">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores, odio officiis dolor inventore sint, ad repudiandae aperiam eaque quia ab minus, impedit sunt quasi voluptatum. Neque eaque sit esse!</p>
            </div>
            
        </div>
    </>
  )
}
