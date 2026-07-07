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
		<div className="flex flex-col items-center gap-8">
			<GameHeader score={score} moves={moves} onReset={initializeGame} />

			{isGameComplete && <WinMessage moves={moves} />}

			<div className="grid grid-cols-4 gap-4 max-w-150 w-full">
				{cards.map((card) => (
					<Card key={card.id} card={card} onClick={handleCardClick} />
				))}
			</div>
		</div>
	);
}

export default App;
