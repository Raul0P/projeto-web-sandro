import '../styles/card.css';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string; 
}

const Card = ({ title, description, imageSrc, imageAlt }: CardProps) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt || title} className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
