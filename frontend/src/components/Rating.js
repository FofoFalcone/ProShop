// E' possibile impostare dei tipi di valore per le varie prop passate nei componenti React
// Li applicheremo sotto i defaultPros
import { PropTypes } from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating mb-3">
      <span className="rating-star">
        {
          // Esiste la possibilità di inserire dello stile inline usando le doppie graffe {{}}; per esempio
          // <div style={{ color }}
          // Nel caso sopra, siccome il nome prop e la proprietà css hanno lo stesso nome, basterà il nome prop; in caso diverso
          // <div style={{ color: customColor }}
        }
        <i style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span className="rating-star">
        <i style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span className="rating-star">
        <i style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span className="rating-star">
        <i style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span className="rating-star">
        <i style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <div className="rating-reviews">
        <span>{text && text}</span>
        {
          // La dicitura sopra è l'equivalente dell'operatore ternario
          // text ? text : ''
          // In pratica, se il testo esiste viene inserito
        }
      </div>
    </div>
  );
};

// Possiamo impostare dei valori di default per le props
Rating.defaultProps = {
    color: '#ffbb00'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating;
