import React from "react";

const Clients = () => {
  const renderImages = () => {
    const images = [];
    const imageUrls = [
      "https://www.indianpharmapost.com/public/thumbs/news/2024/02/15269/Medanta_256_384.jpg",
      "https://genymedium.com/geny-app/geny-data/uploads/2017/03/APOLLO-HOSPITALS-LOGO.jpg",
      "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/b/bb/Tallahassee_Memorial_Logo.jpg&w=640&q=50",
      "https://kims.kiit.ac.in/wp-content/uploads/2022/06/KIMS-Hospital-Bhubaneswar-Logo1k.png",
      "https://genymedium.com/geny-app/geny-data/uploads/2017/03/APOLLO-HOSPITALS-LOGO.jpg",
      "https://kims.kiit.ac.in/wp-content/uploads/2022/06/KIMS-Hospital-Bhubaneswar-Logo1k.png",
      "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/b/bb/Tallahassee_Memorial_Logo.jpg&w=640&q=50",
      "https://www.indianpharmapost.com/public/thumbs/news/2024/02/15269/Medanta_256_384.jpg",
      "https://genymedium.com/geny-app/geny-data/uploads/2017/03/APOLLO-HOSPITALS-LOGO.jpg",
    ];

    // Loop through the image URLs and create img elements for each
    for (let i = 0; i < 10; i++) {
      images.push(
        <img
          key={i}
          src={imageUrls[i % imageUrls.length]} // Ensure looping through image URLs
          alt={`Image ${i + 1}`}
          style={{ height: "150px", margin: "5px" }} // Adjust styling as needed
        />
      );
    }

    return images;
  };

  return (
    <div id="MainClientDiv">
      <div id="ClientsDiv">{renderImages()}</div>
    </div>
  );
};

export default Clients;
