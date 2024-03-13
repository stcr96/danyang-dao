import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, Container, Image } from 'react-bootstrap';
import NFTInfo from '../components/NFTInfo';
import '../assets/css/profilepage.css';

function ProfilePage() {
  const [profileBackground, setProfileBackground] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleBackgroundUpload = (event) => {
    const selectedBackground = event.target.files[0];
    if (selectedBackground) {
      if (selectedBackground.type.startsWith('image/') && selectedBackground.size < 10485760) { // Check if it's an image and size is less than 10MB
        const backgroundUrl = URL.createObjectURL(selectedBackground);
        setProfileBackground(backgroundUrl);
      } else {
        alert('올바른 형식의 이미지를 선택해주세요. (10MB 이하)');
      }
    }
  };
  
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setProfileImage(imageUrl);
  };

  return (
    <>
      <Header />
      <div className="profile-main">
        {/* 프로필 배경사진 */}
        <div className="profile-container">
          <label htmlFor="backgroundUpload" className="profile-background-container">
            <Image variant="top" src={profileBackground} className='profile-background' />
            <input type="file" id="backgroundUpload" accept='image/*' onChange={handleBackgroundUpload} style={{display: 'none'}} />
          </label>
          {/* 프로필 사진 */}
          <label htmlFor="imageUpload" className="profile-picture-container">
            <Image src={profileImage} className='profile-picture' roundedCircle />
            <input type="file" id="imageUpload" accept='image/*' onChange={handleImageUpload} style={{display: 'none'}} />
          </label>
        </div>
        <Container fluid='lg' className='profile-info-container'>
          <div className='mb-5'>
            <div className="profile-info">
              <h2 className="mb-4">프로필 정보</h2>
              <div>
                <strong>Account:  </strong>
                <span>캘시퍼</span>
              </div>
              <div>
                <strong>Network:  </strong>
                <span>Ethereum</span>
              </div>
              <Button variant="primary">프로필 수정</Button>
              {/* 다른 프로필 정보도 필요에 따라 추가 */}
            </div>
          </div>
        <NFTInfo />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default ProfilePage;