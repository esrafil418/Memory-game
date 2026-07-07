interface CardType {
	id: number;
	value: string;
	isFlipped: boolean;
	isMatched: boolean;
}

interface CardProps {
	card: CardType;
	onClick: (card: CardType) => void;
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
			{/* FRONT of card */}
			<div
				className={`
          absolute w-full h-full 
          flex items-center justify-center 
          rounded-lg sm:rounded-xl md:rounded-2xl 
          shadow-md sm:shadow-lg 
          bg-linear-to-b from-slate-800 to-slate-950 
          text-white font-bold 
          text-2xl sm:text-4xl md:text-5xl 
          border-2 border-white/10 
          backface-hidden
          ${!card.isFlipped && !card.isMatched ? "hover:scale-105" : ""}
          active:scale-95
          transition-transform duration-200
        `}
			>
				?
			</div>

			{/* BACK of card */}
			<div
				className={`
          absolute w-full h-full 
          flex items-center justify-center 
          rounded-lg sm:rounded-xl md:rounded-2xl 
          shadow-md sm:shadow-lg 
          bg-neutral-800 
          text-3xl sm:text-5xl md:text-6xl 
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
