import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "../MyToysTable/MyToysTable";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [render, setRender] = useState(false);
  useEffect(() => {
    fetch(`https://toys-market-server-beta.vercel.app/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, render]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-market-server-beta.vercel.app/toy-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              console.log(data);
              setRender(!render);
            }
          });
      }
    });
  };

  return (
    <section className="size">
      <h1>MyToys</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <MyToysTable
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                index={index}
              ></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
