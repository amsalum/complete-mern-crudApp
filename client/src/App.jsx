import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      mobile,
    };

    console.log(data);

    // Using axios to send the data to the server
    axios
      .post("http://localhost:7777/crud", data)
      .then((res) => {
        console.log(res.data);
        setName("");
        setEmail("");
        setMobile("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container pl-35">
      <button
        onClick={() => setOpen(true)}
        className="btn btn-primary btn-padding-7px-15px btn-size-25px"
      >
        Add
      </button>

      {open && (
        <div className="addContainer">
          <div className="close-btn justify-content-end d-flex">
            <MdClose onClick={() => setOpen(false)} size={25} color="red" cursor="pointer" className="close-btn hover:cursor-pointer" />
          </div>
          <form action="" className="addForm form form-padding-left-50px">
            <div>
              <label className="" htmlFor="name">
                Name
              </label>
              <br />
              <input
                className=""
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label htmlFor="mobile">Mobile</label> <br />
              <input
                type="tel"
                id="mobile"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>{" "}
            <br />
            <button
              onClick={handleSubmit}
              className="btn btn-submit btn-primary btn-padding-7px-15px btn-size-25px d-flex align-center"
            >
              Submit
              {/* if(oncliked){
  alert("insertd succesfully")
} */}
          </button>

          </form>
        </div>
      )}
    </div>
  );
}

export default App;