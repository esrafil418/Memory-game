import { useEffect, useState } from "react";

interface CardType {
	id: number;
	value: string;
	isFlipped: boolean;
	isMatched: boolean;
}

interface UseGameLogicReturn {
	cards: CardType[];
	score: number;
	moves: number;
	isGameComplete: boolean;
	initializeGame: () => void;
	handleCardClick: (card: CardType) => void;
}

export const useGameLogic = (cardValues: string[]): UseGameLogicReturn => {
	// State with types
	const [cards, setCards] = useState<CardType[]>([]);
	const [flippedCards, setFlippedCards] = useState<number[]>([]);
	const [matchedCards, setMatchedCards] = useState<number[]>([]);
	const [score, setScore] = useState<number>(0);
	const [moves, setMoves] = useState<number>(0);
	const [isLocked, setIsLocked] = useState<boolean>(false);

	// Shuffle function
	const shuffleArray = <T>(array: T[]): T[] => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Initialize game
	const initializeGame = (): void => {
		const shuffled = shuffleArray(cardValues);

		const finalCards: CardType[] = shuffled.map((value, index) => ({
			id: index,
			value,
			isFlipped: false,
			isMatched: false,
		}));

		setCards(finalCards);
		setIsLocked(false);
		setMoves(0);
		setScore(0);
		setMatchedCards([]);
		setFlippedCards([]);
	};

	// Start game on mount
	useEffect(() => {
		initializeGame();
	}, []); // Empty dependency array = run once

	// Handle card click
	const handleCardClick = (card: CardType): void => {
		// Don't allow clicking if:
		// - card is already flipped
		// - card is matched
		// - game is locked (during animations)
		// - already have 2 cards flipped
		if (
			card.isFlipped ||
			card.isMatched ||
			isLocked ||
			flippedCards.length === 2
		) {
			return;
		}

		// Flip the card
		const newCards = cards.map((c) => {
			if (c.id === card.id) {
				return { ...c, isFlipped: true };
			}
			return c;
		});

		setCards(newCards);

		const newFlippedCards = [...flippedCards, card.id];
		setFlippedCards(newFlippedCards);

		// Check for match if two cards are flipped
		if (flippedCards.length === 1) {
			setIsLocked(true);
			const firstCard = cards[flippedCards[0]];

			if (firstCard.value === card.value) {
				// MATCH found!
				setTimeout(() => {
					setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
					setScore((prev) => prev + 1);
					setCards((prev) =>
						prev.map((c) => {
							if (c.id === card.id || c.id === firstCard.id) {
								return { ...c, isMatched: true };
							}
							return c;
						}),
					);
					setFlippedCards([]);
					setIsLocked(false);
				}, 500);
			} else {
				// NO match - flip back
				setTimeout(() => {
					const flippedBackCard = newCards.map((c) => {
						if (newFlippedCards.includes(c.id) || c.id === card.id) {
							return { ...c, isFlipped: false };
						}
						return c;
					});
					setCards(flippedBackCard);
					setIsLocked(false);
					setFlippedCards([]);
				}, 1000);
			}

			setMoves((prev) => prev + 1);
		}
	};

	// Check if game is complete
	const isGameComplete = matchedCards.length === cardValues.length;

	return {
		cards,
		score,
		moves,
		isGameComplete,
		initializeGame,
		handleCardClick,
	};
};
