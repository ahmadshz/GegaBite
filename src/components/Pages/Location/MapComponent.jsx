const MapComponent = () => {
  return (      <div className="w-full h-[250px] lg:h-[600px] ">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=FWCC+WP5%D8%8C%20%D8%A3%D9%88%D8%AA%D9%88%D8%B3%D8%AA%D8%B1%D8%A7%D8%AF%20%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3%20-%20%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%A9%D8%8C%20%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Business Location Map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

  );
};

export default MapComponent;