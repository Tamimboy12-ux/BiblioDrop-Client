import BookDetailsClient from "./BookDetailsClient";

const BookDetailsPage = async ({ params }) => {

    const {id} = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`,
        {
          cache: "no-store",
        }
      );

    const book = await res.json();

    return (
      <BookDetailsClient  book={book}/>
    );
};

export default BookDetailsPage;