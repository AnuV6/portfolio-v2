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
          Consectetur adipisicing elit. Rem minima maiores, praesentium, aperiam
          eveniet tenetur consequatur beatae id est.
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
