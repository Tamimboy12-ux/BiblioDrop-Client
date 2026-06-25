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

      <div className="mt-20">
        <BookDetailsClient  book={book}/>
      </div>
      
    );
};

export default BookDetailsPage;