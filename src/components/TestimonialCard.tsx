import { FC } from 'react';
import Star from '../assets/star.svg'
import StarOuter from '../assets/star-outer.svg'

interface TestimonialCardProps {
  imageSrc: string;
  testimony: string;
  rating: number;
  name: string;
  role: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  imageSrc,
  testimony,
  rating,
  name,
  role
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img 
          key={i}
          src={i < rating ? Star : StarOuter} 
          alt="ícone estrela" 
          width={22} 
          height={20} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="carousel-card">
      <img src={imageSrc} alt={`Imagem perfil ${name}`} />
      <span className="testimony">
        <p>{testimony}</p>
      </span>
      <span className="rating">
        {renderStars()}
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
};

export default TestimonialCard;
