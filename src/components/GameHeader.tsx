interface GameHeaderProps {
	score: number;
	moves: number;
	onReset: () => void;
}

export const GameHeader = ({ score, moves, onReset }: GameHeaderProps) => {
	return (
		<div className="flex flex-col items-center gap-5 bg-slate-900/90 p-8 rounded-2xl shadow-xl w-full max-w-150 border border-white/10">
			<h1 className="text-4xl text-white text-center">Memory Card Game</h1>
			<div className="flex gap-8 justify-center w-full">
				<div className="flex flex-col items-center gap-1">
					<span className="text-sm text-zinc-400 font-semibold uppercase tracking-wider">
						Score:
					</span>
					<span className="text-3xl font-bold text-indigo-400">{score}</span>
				</div>

				<div className="flex flex-col items-center gap-1">
					<span className="text-sm text-zinc-400 font-semibold uppercase tracking-wider">
						Moves:
					</span>
					<span className="text-3xl font-bold text-indigo-400">{moves}</span>
				</div>
			</div>
			<button
				type="button"
				className="bg-linear-to-r from-indigo-500 to-purple-600 text-white border-none px-8 py-3 text-lg font-semibold rounded-xl cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
				onClick={onReset}
			>
				New Game
			</button>
		</div>
	);
};
