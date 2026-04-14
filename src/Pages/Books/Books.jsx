import { useState } from "react";
import ReadList from "../../Components/ListedBooks/ReadList";
import WishList from "../../Components/ListedBooks/WishList";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCaretDown } from "react-icons/fa";

const Books = () => {
  //   console.log(allBooks);
  // console.log(storedBooks, wishListBooks);

  const [sortingType, setSortingType] = useState("");
  console.log(sortingType)


  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-base-300 text-center py-10  rounded-xl">
        <h2 className="font-extrabold text-2xl">Books</h2>
      </div>

      <div className="flex justify-center items-center my-10 mb-20">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
            Sort by <FaCaretDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=> setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={()=> setSortingType("rating")}>
              <a>Ratings</a>
            </li>
          </ul>
        </div>
      </div>





      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType}></ReadList>
        </TabPanel>
        <TabPanel>
          <WishList sortingType={sortingType}></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
