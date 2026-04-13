

import { useLoaderData } from "react-router";
import ReadList from "../../Components/ListedBooks/ReadList";
import WishList from "../../Components/ListedBooks/WishList";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Books = () => {
  const allBooks = useLoaderData();
//   console.log(allBooks);
  // console.log(storedBooks, wishListBooks);
  return (
    <div className="max-w-7xl mx-auto">

      <div className="bg-base-300 text-center py-10 my-10 rounded-xl">
        <h2 className="font-extrabold text-2xl">Books</h2>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList allBooks={allBooks}></ReadList>
        </TabPanel>
        <TabPanel>
          <WishList allBooks={allBooks}></WishList>
        </TabPanel>
      </Tabs>

      
    </div>
  );
};

export default Books;
