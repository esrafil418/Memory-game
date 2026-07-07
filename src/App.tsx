import GameHeader from "./components/GameHeader";

export default function App() {
	return (
		<div className="flex flex-col items-center gap-8 max-w-300 font-sans bg-[#0a0a0a] min-h-screen justify-center p-5 text-white">
			<GameHeader score={2} moves={4} />
		</div>
	);
}
