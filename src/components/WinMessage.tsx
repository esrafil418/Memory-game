interface WinMessageProps {
	moves: number;
}

export const WinMessage = ({ moves }: WinMessageProps) => {
	return (
		<div className="bg-slate-900/95 p-8 rounded-2xl text-center shadow-2xl border border-white/10 animate-[slideDown_0.5s_ease-out] animate-slideDown">
			<h2 className="text-3xl mb-3">🎉 You Won!</h2>
			<p className="text-xl text-zinc-400">
				You completed the game in {moves} moves!
			</p>
		</div>
	);
};
