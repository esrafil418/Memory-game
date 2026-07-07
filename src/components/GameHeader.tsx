export type GameHeaderProps = {
	score: number;
	moves: number;
};

export default function GameHeader({ score, moves }: GameHeaderProps) {
	return (
		<div className="flex flex-col items-center gap-5 bg-slate-900/90 p-8 rounded-2xl shadow-2xl w-full max-w-150 border border-white/10 text-white">
			<h1 className="text-3xl text-white text-center">Memory Card Game</h1>
			<div className="flex gap-8 justify-center w-full">
				<div className="flex flex-col items-center gap-1">
					<span className="text-sm text-zinc-400 font-semibold uppercase tracking-wide">
						Score:
					</span>
					<span className="text-2xl font-bold text-indigo-400">{score}</span>
				</div>
				<div className="flex flex-col items-center gap-1">
					<span className="text-sm text-zinc-400 font-semibold uppercase tracking-wide">
						Moves:
					</span>
					<span className="text-2xl font-bold text-indigo-400">{moves}</span>
				</div>
			</div>
		</div>
	);
}
