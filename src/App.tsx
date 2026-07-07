import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues: string[] = [
	"🍎",
	"🍌",
	"🍇",
	"🍊",
	"🍓",
	"🥝",
	"🍑",
	"🍒",
	"🍎",
	"🍌",
	"🍇",
	"🍊",
	"🍓",
	"🥝",
	"🍑",
	"🍒",
];

function App() {
	const {
		cards,
		score,
		moves,
		handleCardClick,
		initializeGame,
		isGameComplete,
	} = useGameLogic(cardValues);

	return (
		<div className="min-h-screen flex items-center justify-center p-2 sm:p-5">
			<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-2xl w-full border border-white/10">
				<GameHeader score={score} moves={moves} onReset={initializeGame} />

				{isGameComplete && (
					<div className="mt-4 sm:mt-6">
						<WinMessage moves={moves} />
					</div>
				)}

				<div className="grid grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
					{cards.map((card) => (
						<Card key={card.id} card={card} onClick={handleCardClick} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
