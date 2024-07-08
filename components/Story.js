const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My story <span data-number={1} />
        </h5>
        {/* quote */}
        <blockquote
          className="trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          ICT undergrad with a burning passion for Cybersecurity. I'm coding my way to a DevOps career, where I can combine my technical skills to build secure and automated systems.
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
