import React from 'react';

// 추천 콘텐츠 컴포넌트
function FeaturedSection() {
  const featuredItems = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the basics of React with this beginner-friendly course.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Take your JavaScript skills to the next level with this advanced guide.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'CSS Grid and Flexbox',
      description: 'Master modern CSS layout techniques with this comprehensive guide.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Featured Content</h2>
      <div style={gridStyle}>
        {featuredItems.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.imageUrl} alt={item.title} style={imageStyle} />
            <h3 style={titleStyle}>{item.title}</h3>
            <p style={descriptionStyle}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 스타일링
const sectionStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
  marginBottom: '15px',
};

const titleStyle = {
  fontSize: '18px',
  margin: '10px 0',
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#666',
};

export default FeaturedSection;