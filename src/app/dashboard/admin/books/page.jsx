"use client";

import {useEffect,useState} from "react";

import {getPendingBooks, approveBook, deleteBook}from "@/services/booksApi";
import toast from "react-hot-toast";
import { Spinner } from "@heroui/react";


const AdminBooksPage=()=>{

    const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(true);

    const loadBooks=async()=>{
        try{
            const data = await getPendingBooks();
            setBooks(data);

        }finally{
            setLoading(false);
        }
    }       


    useEffect(()=>{
        loadBooks();
    },[]);

    const handleApprove=async(id)=>{
        await approveBook(id);
        toast.success("Published");
        loadBooks();
    }

    const handleDelete=async(id)=>{
        await deleteBook(id);
        toast.success("Delete Successful")
        loadBooks();
    }

    if(loading){
      return (
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Success</span>
      </div>
      )
    }




    return (
        
        <div className="space-y-6">
        
           <h1 className="
             text-4xl
             font-bold
             ">
             Book Approval Queue
           </h1>
        
        {
           books.length===0 && (
            <div className=" bg-white p-10 rounded-3xl border text-center">
             No Pending Books Found
            </div>
           )
        }

        {
        books.length>0 && (
        
        <div className=" bg-white rounded-3xl border overflow-hidden " >
         
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-5 text-left">
                    Book
                </th>
                <th className="p-5">
                    Category
                </th>
                <th className="p-5">
                    Status
                </th>
                <th className="p-5">
                    Action
                </th>
               </tr>
            </thead>
        
            <tbody>
                {
                books.map(book=>(
                
                <tr
                key={book._id}
                className="border-t"
                >
                <td className="p-5">
                
                <h3 className="font-semibold">              
                {book.title}
                </h3>
                           
                <p className="text-sm text-gray-500">             
                {book.author}             
                </p>             
                </td>

                <td className="text-center">               
                {book.category}               
                </td>
                              
                <td className="text-center">               
                
                <span className="
                bg-yellow-100
                text-yellow-700
                px-3
                py-1
                rounded-full
                text-sm
                ">              
                {book.status}              
                </span>
                              
                </td>
                <td>
                <div className="flex justify-center gap-3">
                <button
                onClick={()=>handleApprove(book._id)}
                className="
                bg-green-600
                text-white
                px-4
                py-2
                rounded-xl
                "
                >
                Approve
                </button>

                <button
                onClick={()=>handleDelete(book._id)}
                className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded-xl
                "
                >
                Delete
                </button>
                
                </div>
                
                </td>
                                
                </tr>
                
                ))
                }

        </tbody>
        </table>

        </div>
        )
        }

        </div>
    )

}



export default AdminBooksPage;