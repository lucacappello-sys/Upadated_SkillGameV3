import '../../assets/styles/selectioncard.scss';

export interface CardData {
  id: number;
  label: string;
  title: string;
  description: string;
  colorClass: string;
  illustration: string;
}

interface SelectionCardProps {
  data: CardData;
  isSelected?: boolean;
  onSelect?: (id: number) => void;
  isSector?: boolean;      // Se true, applica sfondo scuro all'immagine
  isInteractive?: boolean; // Se false, disabilita hover e click (per Review/Results)
  noShadow?: boolean;      // Se true, rimuove l'ombra dalla card
}

export default function SelectionCard({
  data,
  isSelected = false,
  onSelect,
  isSector = false,
  isInteractive = true,
  noShadow = false
}: SelectionCardProps) {

  const staticClass = !isInteractive ? 'selection-card--static' : '';
  const selectedClass = isSelected ? 'selection-card--selected' : '';
  const sectorClass = isSector ? 'selection-card__illustration-wrapper--dark-bg' : '';
  const noShadowClass = noShadow ? 'selection-card--no-shadow' : '';

  const handleClick = () => {
    if (isInteractive && onSelect) {
      onSelect(data.id);
    }
  };

  return (
    <div
      className={`selection-card ${data.colorClass} ${selectedClass} ${staticClass} ${noShadowClass}`}
      onClick={handleClick}
    >
      <div className="selection-card__label">{data.label}</div>

      <div className={`selection-card__illustration-wrapper ${sectorClass}`}>
        <img
          src={data.illustration}
          alt={data.title}
          className="selection-card__illustration"
        />
      </div>

      <h3 className="selection-card__title">{data.title}</h3>
      <p className="selection-card__description">{data.description}</p>
    </div>
  );
}