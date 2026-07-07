interface GameHeaderProps {
	score: number;
	moves: number;
	onReset: () => void;
}

export const GameHeader = ({ score, moves, onReset }: GameHeaderProps) => {
	return (
		<div className="flex flex-col items-center gap-3 sm:gap-5 w-full">
			<h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-bold">
				🎮 Memory Card Game
			</h1>

			<div className="flex gap-4 sm:gap-8 justify-center w-full">
				<div className="flex flex-col items-center gap-0.5 sm:gap-1">
					<span className="text-[10px] sm:text-xs md:text-sm text-zinc-400 font-semibold uppercase tracking-wider">
						Score:
					</span>
					<span className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">
						{score}
					</span>
				</div>

				<div className="flex flex-col items-center gap-0.5 sm:gap-1">
					<span className="text-[10px] sm:text-xs md:text-sm text-zinc-400 font-semibold uppercase tracking-wider">
						Moves:
					</span>
					<span className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">
						{moves}
					</span>
				</div>
			</div>

			<button
				className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 w-full sm:w-auto"
				onClick={onReset}
			>
				New Game
			</button>
		</div>
	);
};
