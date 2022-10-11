import React, { useEffect, useState } from "react"
import TabelBuku from "./TabelBuku"
import axios from "axios"

function ManajemenBuku() {
  const [formMode, setFormMode] = useState("")
  const [books, setBooks] = useState([])
  const [inputForm, setInputForm] = useState({})

  function showCreateForm() {
    setInputForm("")
    setFormMode("create")
  }

  const showEditForm = (book) => {
    setInputForm(book)
    setFormMode("edit")
  }

  const handleJudul = (e) => {
    setInputForm({ ...inputForm, judul: e.target.value })
  }

  const handlePengarang = (e) => {
    setInputForm({ ...inputForm, pengarang: e.target.value })
  }

  const submitForm = async (event) => {
    event.preventDefault()

    if (formMode === "create") {
      await axios
        .post("http://localhost:4000/book/add", inputForm)
        .then(() => {
          alert("data berhasil ditambahkan")
          retriveData()
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
    if (formMode === "edit") {
      await axios
        .put(`http://localhost:4000/book/update/${inputForm._id}`, inputForm)
        .then(() => {
          retriveData()
          alert("data berhasil diedit")
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }

  const deleteOne = async (book) => {
    console.log("book ini", book)
    await axios
      .delete(`http://localhost:4000/book/delete/${book?._id}`)
      .then(() => {
        retriveData()
        alert("Data Berhasil dihapus")
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const retriveData = async () => {
    await axios
      .get("http://localhost:4000/book")
      .then((res) => {
        setBooks(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  useEffect(() => {
    retriveData()
  }, [])

  return (
    <div className="container mt-3">
      <div>
        <h1 className="text-center">Manajemen Buku</h1>
        <button
          className="btn btn-sm btn-primary my-2"
          onClick={showCreateForm}
        >
          Tambah buku
        </button>
        <div id="form"></div>
      </div>
      {formMode !== "" && (
        <div id="form" className="card py-2 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Buku</h4>
            <form className="row" onSubmit={submitForm}>
              <div className="col-6">
                <input
                  type="text"
                  name="Judul"
                  className="form-control mx-2"
                  placeholder="Judul..."
                  value={inputForm.judul || ""}
                  onChange={handleJudul}
                ></input>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="Pengarang"
                  className="form-control mx-2"
                  placeholder="Pengarang..."
                  value={inputForm.pengarang || ""}
                  onChange={handlePengarang}
                ></input>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  className="btn btn-success"
                  value={"Submit"}
                ></input>
              </div>
            </form>
          </div>
        </div>
      )}
      <TabelBuku
        showEdit={showEditForm}
        books={books}
        requestToDelete={deleteOne}
      />
      <p>{console.log(inputForm)}</p>
    </div>
  )
}

export default ManajemenBuku
