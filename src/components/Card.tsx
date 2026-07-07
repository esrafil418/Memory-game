// Step 1: Define the Card type/interface
interface CardType {
	id: number;
	value: string;
	isFlipped: boolean;
	isMatched: boolean;
}

// Step 2: Define props for the component
interface CardProps {
	card: CardType;
	onClick: (card: CardType) => void; // onClick receives a card object
}

export const Card = ({ card, onClick }: CardProps) => {
	return (
		<div
			className={`
        aspect-square relative cursor-pointer 
        transform-3d 
        transition-transform duration-500
        ${card.isFlipped ? "transform-[rotateY(180deg)]" : ""}
        ${card.isMatched ? "pointer-events-none" : ""}
      `}
			onClick={() => onClick(card)}
		>
			{/* FRONT of card (shows "?" when not flipped) */}
			<div
				className={`
          absolute w-full h-full 
          flex items-center justify-center 
          rounded-2xl shadow-lg 
          bg-linear-to-b from-slate-800 to-slate-950 
          text-white font-bold text-5xl 
          border-2 border-white/10 
          backface-hidden
          ${!card.isFlipped && !card.isMatched ? "hover:scale-105" : ""}
          active:scale-95
          transition-transform duration-200
        `}
			>
				?
			</div>

			{/* BACK of card (shows emoji when flipped) */}
			<div
				className={`
          absolute w-full h-full 
          flex items-center justify-center 
          rounded-2xl shadow-lg 
          bg-neutral-800 
          text-6xl 
          border-2 border-white/10 
          backface-hidden 
          transform-[rotateY(180deg)]
          ${card.isMatched ? "bg-emerald-500/20 shadow-[0_0_20px_rgba(126,211,33,0.4)] border-emerald-500/50" : ""}
        `}
			>
				{card.value}
			</div>
		</div>
	);
};
