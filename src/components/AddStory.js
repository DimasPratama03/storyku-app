import React from 'react';
import './AddStory.css';

function AddStory() {
  return (
    <div>
      <h2>Add Story</h2>
      <div className="add-story-form">
        <div className="form-group">
          <label>Title</label>
          <input type="text" placeholder="Title" />
        </div>
        <div className="form-group">
          <label>Writer Name</label>
          <input type="text" placeholder="Writer Name" />
        </div>
        <div className="form-group">
          <label>Synopsis</label>
          <textarea placeholder="Synopsis"></textarea>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select>
            <option>Category</option>
            {/* Tambahkan opsi lainnya */}
          </select>
        </div>
        <div className="form-group">
          <label>Tags/Keyword Story</label>
          <div className="tags">
            <span className="tag">Best</span>
            <span className="tag">Mental Illness</span>
            <span className="tag">Short</span>
            {/* Tambahkan tag lainnya */}
          </div>
        </div>
        <div className="form-group">
          <label>Cover Image</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select>
            <option>Publish</option>
            {/* Tambahkan opsi lainnya */}
          </select>
        </div>
        <button className="add-chapter">Add Chapter</button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Last Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Moon that Never Smile</td>
              <td>18 January 2024</td>
              <td><button className="action-button">...</button></td>
            </tr>
            {/* Tambahkan baris lainnya sesuai kebutuhan */}
          </tbody>
        </table>
        <div className="form-actions">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddStory;
