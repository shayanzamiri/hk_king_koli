import { Component } from "solid-js";

interface FigureCardProps {
  image: string;
  text: string;
}

const FigureCard: Component<FigureCardProps> = (props) => {
  return (
    <figure class="figure-card">
      <img
        src={props.image}
        alt={props.text}
        loading="lazy"
        class="figure-card-image"
      />
      <figcaption class="figure-card-caption">{props.text}</figcaption>
    </figure>
  );
};

export default FigureCard;
