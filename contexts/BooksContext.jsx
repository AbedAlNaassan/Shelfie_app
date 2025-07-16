// import { creatContext, createContext, useState } from "react";
// import { databases } from "../lib/appwrite";
// import { useUser } from "../hooks/useUser";

// const DATABSE_ID = "68776b360026b5a22066";
// const COLLECTION_ID = "68776b5a003978158244";

// export const BooksContext = creatContext();

// export function BooksProvider({ children }) {
//   const [books, setBooks] = useState([]);
//   const { user } = useUser();

//   async function fetchBooks() {
//     try {
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   async function fetchBookById(id) {
//     try {
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   async function createBook(data) {
//     try {
//       const newBook = await databases.createDocument(
//         DATABSE_ID,
//         COLLECTION_ID,
//         ID.unique(),
//         { ...data, userId: user.$id },
//         [
//           Permission.read(Role.user(user.$id)),
//           Permission.update(Role.user(user.$id)),
//           Permission.delete(Role.user(user.$id)),
//         ]
//       );
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   async function DeleteBook(id, data) {
//     try {
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   return (
//     <BooksContext.Provider
//       value={{ books, fetchBooks, fetchBookById, createBook, DeleteBook }}
//     >
//       {children}
//     </BooksContext.Provider>
//   );
// }

// export default BooksProvider;

import { createContext, useEffect, useState } from "react"; // remove creatContext
import { databases } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";
import { ID, Permission, Role } from "appwrite"; // make sure you import these if you're using them
import { Query } from "react-native-appwrite";

const DATABSE_ID = "68776b360026b5a22066";
const COLLECTION_ID = "68776b5a003978158244";

export const BooksContext = createContext(); // fixed

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABSE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
      // Your fetch logic here
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABSE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
      // Optionally update state:
      setBooks((prev) => [...prev, newBook]);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function DeleteBook(id) {
    try {
      await databases.deleteDocument(DATABSE_ID, COLLECTION_ID, id);
      setBooks((prev) => prev.filter((book) => book.$id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, DeleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;
