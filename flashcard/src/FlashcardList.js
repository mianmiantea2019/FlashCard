import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.slice(0,8).map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
