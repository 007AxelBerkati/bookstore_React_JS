import React, { useEffect, useState } from "react"
import TabelBuku from "./TabelBuku"
import axios from "axios"

function ManajemenBuku() {
  const [formMode, setFormMode] = useState("")
  const [books, setBooks] = useState()

  function showCreateForm() {
    setFormMode("show")
  }

  const showEditForm = () => {
    setFormMode("show")
  }

  const retriveData = () => {
    axios
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
      {formMode === "show" && (
        <div id="form" className="card py-2 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Buku</h4>
            <form className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="Judul"
                  className="form-control mx-2"
                  placeholder="Judul..."
                ></input>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="Pengarang"
                  className="form-control mx-2"
                  placeholder="Pengarang..."
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
      <TabelBuku showEdit={showEditForm} />
      <p>{JSON.stringify(books)}</p>
    </div>
  )
}

export default ManajemenBuku
