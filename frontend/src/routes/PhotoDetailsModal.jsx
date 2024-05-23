// import React from 'react';
// import '../styles/PhotoDetailsModal.scss';
// import closeSymbol from '../assets/closeSymbol.svg';
// import PhotoList from '../components/PhotoList';

// const PhotoDetailsModal = ({ toggleModal, selectedPhoto }) => {
//   if (!selectedPhoto) {
//     console.error('No selected photo data available');
//     return null;
//   }

//   const similarPhotosArray = selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : [];

//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button" onClick={toggleModal}>
//         <img src={closeSymbol} alt="Close" />
//       </button>
//       <img
//         src={selectedPhoto.urls.regular}
//         alt={`Photo by ${selectedPhoto.user.username}`}
//         className="photo-details-modal__image"
//       />
//       <div className="photo-details-modal__photographer-details">
//         {/* Might have to hard code photographer details if needed*/}
//       </div>

//       {similarPhotosArray.length > 0 && (
//         <div className="photo-details-modal__images">
//           <div className="photo-details-modal__header">
//             Similar Photos
//           </div>
//           <PhotoList photos={similarPhotosArray} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhotoDetailsModal;

import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ toggleModal, selectedPhoto }) => {
  if (!selectedPhoto) {
    console.error('No selected photo data available');
    return null;
  }

  // Destructure necessary data safely
  const {
    urls: { regular: photoUrl } = {},
    user: {
      username,
      profile: userProfile,
      name: userName
    } = {},
    location: { city, country } = {},
    similar_photos: similarPhotos
  } = selectedPhoto;

  // Prepare similar photos array
  const similarPhotosArray = similarPhotos ? Object.values(similarPhotos) : [];

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <img src={photoUrl} alt={`Photo by ${username}`} className="photo-details-modal__image" />
      <div className="photo-details-modal__photographer-details">
        <img src={userProfile} alt={`${userName}'s profile`} className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-info">
          <h2>{userName}</h2>
          <p className="photo-details-modal__photographer-location">{city}, {country}</p>
        </div>
      </div>

      {similarPhotosArray.length > 0 && (
        <div className="photo-details-modal__images">
          <h2>Similar Photos:</h2>
          <PhotoList photos={similarPhotosArray} onPhotoClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;






