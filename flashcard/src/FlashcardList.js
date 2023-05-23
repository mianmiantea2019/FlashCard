import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="card-grid">
      {flashcards.slice(0, 8).map(flashcard => (
        <Flashcard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  );
};

export default FlashcardList;
