interface WinMessageProps {
	moves: number;
}

export const WinMessage = ({ moves }: WinMessageProps) => {
	return (
		<div className="bg-slate-900/95 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center shadow-2xl border border-white/10 animate-slideDown">
			<h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
				🎉 You Won!
			</h2>
			<p className="text-base sm:text-lg md:text-xl text-zinc-400">
				You completed the game in {moves} moves!
			</p>
		</div>
	);
};
