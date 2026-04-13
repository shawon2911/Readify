

import { FaUserFriends } from "react-icons/fa";
import { LuBookOpenText } from "react-icons/lu";

const ListedBookCard = ({ selectedBook}) => {
  // console.log(allBooks);

  // const { readListBooks, wishListBooks } = useContext(BookContext);
  // // console.log(readListBooks, wishListBooks);
  // const allListedBooks = [...readListBooks, ...wishListBooks];
  // console.log(allListedBooks);
  //   const singleBook = useLoaderData();
  //   console.log(singleBook);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        
          <div  className="grid grid-cols-3 border border-gray-300 my-8 rounded-2xl shadow-sm ">
            <figure className="col-span-1 flex justify-center items-center bg-base-200 rounded-2xl my-5 mx-5">
              <img src={selectedBook.image} className="h-50 " />
            </figure>
            <div className="card-body col-span-2 space-y-3">
              <h2 className="card-title font-bold text-[24px] text-black">
                {selectedBook.bookName}
              </h2>
              <h3 className="font-medium text-[16px] text-[#131313]/80">
                By : {selectedBook.author}
              </h3>
              <div className="flex items-center gap-4  ">
                <span className="font-bold text-black">Tag </span>
                {selectedBook.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="text-[16px] text-[#131313]/60 flex justify-start items-center gap-5 border-b pb-5 border-gray-300">
                <div className="flex justify-start items-center gap-3">
                    <FaUserFriends/>
                    <h3>Publisher : {selectedBook.publisher}</h3>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <LuBookOpenText />
                    <h3>Page : {selectedBook.totalPages}</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <h3 className="bg-[#328EFF]/15 py-2 px-5 rounded-full text-[#328EFF]">Category : {selectedBook.category}</h3>
                <h3 className="bg-[#FFAC33]/15 py-2 px-5 rounded-full text-[#FFAC33]">Category : {selectedBook.category}</h3>
                <button className="btn bg-[#23BE0A] py-2 px-5 text-white rounded-full">View Details</button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default ListedBookCard;
