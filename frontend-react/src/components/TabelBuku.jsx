import React from "react"

function TabelBuku({ showEdit }) {
  const editData = () => {
    showEdit()
  }

  return (
    <div>
      <h4>Tabel Data Buku</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Pengarang</th>
            <th className="col-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Laskar Pelangi</td>
            <td>Andrea Hirata</td>
            <td>
              <button
                className="btn btn-sm btn-warning mx-2"
                onClick={() => editData()}
              >
                Edit
              </button>
              <button className="btn btn-sm btn-danger">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TabelBuku
